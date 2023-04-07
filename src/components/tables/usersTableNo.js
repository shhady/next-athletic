import React from 'react'
// import data from "../../../database/data.json"
import { useState,useEffect } from 'react'
import getUser  from '../../../lib/helper'
import useSWR from "swr"
import Image from 'next/image'
import Link from 'next/link'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function TrainersTable() {

    // const {user, isLoading, isError} = getData()
    // const filteredData = user?.filter(u=> u.role == 'user');
    // console.log(filteredData)
    // if(isError) return <div>error</div>
    // if(isLoading) return <div>loading ... </div>
    //  console.log(user)
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        const fetchData= async ()=>{
            const users = await fetch("http://localhost:3000/api/users")
            const data = await users.json()
            setUsers(data.filter(user=>user.role == "user"))
        } 
        fetchData()
    },[])

  return (
    <table  style={{width:"100%", marginTop:"40px"}}>
       <tbody>
        {
            users?.map(user =>(
                <>
                <div>{user.name}</div>
                <div>{user.email}</div>
                </>
            ))
        }
       </tbody>
    </table>
  )
}
// function getData (){
//     const {data, error} = useSWR("http://localhost:3000/api/users",fetcher)
//     console.log(data)
//     return{
//         user:data,
//         isLoading : !error && !data,
//         isError: error
//     }
// }


// function TR ({avatar, name, _id, paidDate, paidPeriod}){
//     return (
       
//         <tr  style={{width:"100%"}}>
//             <td >
//              <Link href={`/users/${_id}`}  key={_id} style={{width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr", alignItems:"center", marginBottom:"10px"}}>
            
//                 <Image src={avatar} alt={name}  width={70} height={70} style={{ borderRadius:"50%"}}/>
//                 <span>{name}</span>
//                 <span>{paidDate}</span>
//                 <span>{paidPeriod}</span>

                
//             </Link>
//             </td>
//         </tr>
       
//     )
// }

