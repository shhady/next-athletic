import React from 'react'
// import data from "../../../database/data.json"
import { useState,useEffect } from 'react'
import getUser  from '../../../lib/helper'
import {BiEdit} from "react-icons/bi"
import {MdOutlineDelete} from "react-icons/md"
import useSWR from "swr"
import EditUser from './editUser/editUser'
import Image from 'next/image'
import Link from 'next/link'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function TrainersTable({setBtnClicked}) {
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('')
    const {user, isLoading, isError} = getData();
    const [filteredData, setFilteredData] = useState([]);
    useEffect(()=>{
        setFilteredData(user?.filter(u=> u.role == 'user').map(obj => ({...obj, value: obj.paidPeriod * 30 - getDaysSinceUpdate(obj.paidDate)})).sort((a, b) => a.value - b.value))
    },[user])
    
    if(isError) return <div>error</div>
    if(isLoading) return <div>loading ... </div>
     console.log(edit)


  return (
    <>
    {edit ? (<div style={{width:"100vw", height:"100vh", position:"fixed", top:"0",right:"0", background:"black"}}>
    
    <div><EditUser id={id} setEdit={setEdit} edit={edit} setBtnClicked={setBtnClicked} setFilteredData={setFilteredData} filteredData={filteredData}/></div>
    
    </div>):(<table  style={{width:"100%", marginTop:"40px"}}>
       <tbody>
        <div style={{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}}>
            <div>שם <br/>(לקוח)</div>
            <div>תאריך <br/>(הצטרפות)</div>
            <div>מינוי<br/>(חודשים)</div>
            <div>נשאר <br/>(ימים)</div>
        </div>
          {
            filteredData?.map((obj,i)=> <TR edit={edit} setEdit={setEdit} {...obj} key={i} setId={setId}/>)
        }
       </tbody>
    </table>)}
    
    </>
  )
}

function getData (){
    const {data, error} = useSWR("http://localhost:3000/api/users",fetcher)
    console.log(data)
    return{
        user:data,
        isLoading : !error && !data,
        isError: error
    }
}
function getDaysSinceUpdate(paidDate) {
    const today = new Date();
    const paidDate1 = new Date(paidDate);
    return Math.round((today - paidDate1) / (1000 * 60 * 60 * 24));
}


function TR ({avatar, name, _id, paidDate, paidPeriod, value, setEdit, edit, setId}){
    return (
        <tr  style={{width:"100%"}}>
            <td>
                {value < 30 ? (<div style={{width:"100%",background:"red",display:"grid",gridTemplateColumns:" 4fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}}>
                    <Link href={`/users/${_id}`}  key={_id} style={{width:"100%",background:"red",display:"grid",gridTemplateColumns:" 1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}} >
                    <span>{name}</span>
                    <span>{paidDate.slice(0,10)}</span>
                    <span>{paidPeriod}</span>
                    <span>{value}</span>
                    </Link>
                    <div style={{display:"flex", gap:"10px"}}>
                    <span onClick={()=>{setEdit(true); setId(_id)}}><BiEdit /></span>
                    <span><MdOutlineDelete/></span>
                    </div>
                    </div> ):(
                    <div style={{width:"100%",display:"grid",gridTemplateColumns:" 4fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}}>
                    <Link href={`/users/${_id}`}  key={_id}  style={{width:"100%",display:"grid",gridTemplateColumns:" 1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}} >
                    <span>{name}</span>
                    <span>{paidDate.slice(0,10)}</span>
                    <span>{paidPeriod}</span>
                    <span>{value}</span>
                    </Link>
                    <div style={{display:"flex", gap:"10px"}}>
                    <span   onClick={()=>{setEdit(true); setId(_id)}}><BiEdit /></span>
                    <span><MdOutlineDelete/></span>
                    </div>
                </div>)}
                
            </td>
        </tr>
    )
}