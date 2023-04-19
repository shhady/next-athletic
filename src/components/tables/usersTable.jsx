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
import DeleteUser from './deleteUser/deleteUser'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function TrainersTable({setBtnClicked, socket}) {
    const [deleteUser , setDeleteUser] = useState(false)
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
    {deleteUser && <div style={{width:"100vw", height:"100vh", position:"fixed", top:"0",right:"0", background:"rgba(0, 0, 0, 0.9)"}} onClick={()=>setDeleteUser(false)}>
       <div style={{width:"100vw", height:"30vh", position:"fixed", top:"30%",right:"0", background:"black", border:"1px solid gold"}}>
        <DeleteUser id={id} setDeleteUser={setDeleteUser} setBtnClicked={setBtnClicked} filteredData={filteredData} setFilteredData={setFilteredData}/>
        </div>
        </div>}
    {edit ? (<div style={{width:"100vw", height:"100vh", position:"fixed", top:"0",right:"0", background:"black"}}>
    
    <div><EditUser socket={socket} id={id} setEdit={setEdit} edit={edit} setBtnClicked={setBtnClicked} setFilteredData={setFilteredData} filteredData={filteredData}/></div>
    
    </div>):(
    <>
     <div style={{width:"100%",padding:"7px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", alignItems:"center", textAlign:"center", marginTop:"25px", background:"#3a3a3a"}}>
            <div>שם <br/>(לקוח)</div>
            <div>תאריך <br/>(הצטרפות)</div>
            <div>מינוי<br/>(חודשים)</div>
            <div>נשאר <br/>(ימים)</div>
        </div>
    <table style={{width:"100%", marginTop:"20px"}}>
       <tbody>
       
          {
            filteredData?.map((obj,i)=> <TR  deleteUser={deleteUser} setDeleteUser={setDeleteUser} edit={edit} setEdit={setEdit} {...obj} key={i} setId={setId}/>)
        }
       </tbody>
    </table></>)}
    
    </>
  )
}

function getData (){
    const {data, error} = useSWR("http://localhost:5000/users",fetcher)
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


function TR ({avatar, name, _id, paidDate, paidPeriod, value, setEdit, edit, setId, setDeleteUser, deleteUser}){
    return (
        <tr  style={{width:"100%"}}>
            <td>
                {value < 30 ? (<div style={{width:"100%",background:"red",display:"grid",gridTemplateColumns:" 4fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}}>
                    <Link href={`/users/${_id}`}  key={_id} style={{width:"100%",background:"red",display:"grid",gridTemplateColumns:" 1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}} >
                    <span>{name}</span>
                    <span>{paidDate?.slice(0,10)}</span>
                    <span>{paidPeriod}</span>
                    <span>{value}</span>
                    </Link>
                    <div style={{display:"flex", gap:"10px"}}>
                    <span onClick={()=>{setEdit(true); setId(_id)}}><BiEdit /></span>
                    <span onClick={()=>{setDeleteUser(true); setId(_id)}}><MdOutlineDelete/></span>
                    </div>
                    </div> ):(
                    <div style={{width:"100%",display:"grid",gridTemplateColumns:" 4fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}}>
                    <Link href={`/users/${_id}`}  key={_id}  style={{width:"100%",display:"grid",gridTemplateColumns:" 1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}} >
                    <span>{name}</span>
                    <span>{paidDate?.slice(0,10)}</span>
                    <span>{paidPeriod}</span>
                    <span>{value}</span>
                    </Link>
                    <div style={{display:"flex", gap:"10px"}}>
                    <span   onClick={()=>{setEdit(true); setId(_id)}}><BiEdit /></span>
                    <span  onClick={()=>{setDeleteUser(true); setId(_id)}}><MdOutlineDelete/></span>
                    </div>
                </div>)}
                
            </td>
        </tr>
    )
}