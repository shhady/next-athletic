import React from 'react'
import { useState,useEffect } from 'react'
import {BiEdit} from "react-icons/bi"
import {MdOutlineDelete} from "react-icons/md"
import useSWR from "swr"
import EditClass from './EditClass/EditClass'

import Link from 'next/link'
import DeleteClass from './DeleteClass/DeleteClass'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function ClassesTable({setBtnClicked}) {
    const [deleteClass , setDeleteClass] = useState(false)
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    const {theClass, isLoading, isError} = getData();
    
    useEffect(() =>{
        setFilteredData(theClass)
    },[theClass])
    
    if(isError) return <div>error</div>
    if(isLoading) return <div>loading ... </div>
     console.log(edit)


  return (
    <>
    {deleteClass && <div style={{width:"100vw", height:"100vh", position:"fixed", top:"0",right:"0", background:"rgba(0, 0, 0, 0.9)"}} onClick={()=>setDeleteClass(false)}>
       <div style={{width:"100vw", height:"30vh", position:"fixed", top:"30%",right:"0", background:"black", border:"1px solid gold"}}>
        <DeleteClass id={id} setDeleteClass={setDeleteClass} setBtnClicked={setBtnClicked} filteredData={filteredData} setFilteredData={setFilteredData}/>
        </div>
        </div>}
    {edit ? (<div style={{width:"100vw", height:"100vh", position:"fixed", top:"0",right:"0", background:"black"}}>
    
    <div><EditClass id={id} setEdit={setEdit} edit={edit} setBtnClicked={setBtnClicked} setFilteredData={setFilteredData} filteredData={filteredData}/></div>
    
    </div>):(
    <>
     <div style={{width:"100%",padding:"7px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1fr 1fr", alignItems:"center", textAlign:"center", marginTop:"25px", background:"#3a3a3a"}}>
            <div>שם </div>
            <div>תאריך</div>
            <div>שעה</div>
            <div>יום</div>
            <div>עד</div>
            <div>נרשמו</div>
        </div>
    <table style={{width:"100%", marginTop:"20px"}}>
       <tbody>
       
          {
            filteredData?.map((obj,i)=> <TR  deleteClass={deleteClass} setDeleteClass={setDeleteClass} edit={edit} setEdit={setEdit} {...obj} key={i} setId={setId}/>)
        }
       </tbody>
    </table></>)}
    
    </>
  )
}

function getData (){
    const {data, error} = useSWR("http://localhost:5000/classes",fetcher)
    console.log(data)
    return{
        theClass:data,
        isLoading : !error && !data,
        isError: error
    }
}


function TR ({className, _id, classDate, classTime, classDay, maxUsers,setEdit, setId, setDeleteClass,attending, deleteClass}){
    return (
        <tr  style={{width:"100%"}}>
            <td  style={{width:"100%",display:"grid",gridTemplateColumns:" 6fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}}>
                    <Link href={`/classes/${_id}`}  key={_id} style={{width:"100%",display:"grid",gridTemplateColumns:" 1fr 1fr 1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px", textAlign:"center"}} >
                    <span>{className}</span>
                    <span>{classDate?.slice(5,10)}</span>
                    <span>{classTime}</span>
                    <span>{classDay}</span>
                    <span>{maxUsers}</span>
                    <span>{attending?.length}</span>
                    </Link>
                    <div style={{display:"flex", gap:"10px"}}>
                    <span onClick={()=>{setEdit(true); setId(_id)}}><BiEdit /></span>
                    <span onClick={()=>{setDeleteClass(true); setId(_id)}}><MdOutlineDelete/></span>
                    </div>
            </td>
        </tr>
    )
}