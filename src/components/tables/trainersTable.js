import React from 'react'
// import data from "../../../database/data.json"
import { useState,useEffect } from 'react'
import getUser  from '../../../lib/helper'
import useSWR from "swr"
import Image from 'next/image'
import Link from 'next/link'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function TrainersTable() {

    const {user, isLoading, isError} = getData()
    const data = user?.filter(u=> u.role == 'coach');
    console.log(data)
    if(isError) return <div>error</div>
    if(isLoading) return <div>loading ... </div>
    
  return (
    <table  style={{width:"100%", marginTop:"40px"}}>
       <tbody>
        {
            data?.map((obj,i)=> <TR {...obj} key={i}/>)
        }
       </tbody>
    </table>
  )
}
function getData (){
    const {data, error} = useSWR("http://localhost:5000/users",fetcher)

    return{
        user:data,
        isLoading : !error && !data,
        isError: error
    }
}


function TR ({avatar, name, _id, phone}){
    return (
       
        <tr  style={{width:"100%"}}>
            <td >
             <Link href={`/users/${_id}`}  key={_id} style={{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",textAlign:"center", alignItems:"center", marginBottom:"10px"}}>
            
                <Image src={avatar} alt={name}  width={60} height={60} style={{ borderRadius:"50%"}}/>
                <span>{name}</span>
                <span>{phone}</span>
            </Link>
            </td>
        </tr>
       
    )
}

