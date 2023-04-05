import React from 'react'
import data from "../../../database/data.json"
export default function TrainersTable() {
  return (
    <table  style={{width:"100%", marginTop:"40px"}}>
       <tbody>
        {
            data.map((obj,i)=> <TR {...obj} key={i}/>)
        }
       </tbody>
    </table>
  )
}

function TR ({image, name}){
    return (
        <tr  style={{width:"100%"}}>
            <td style={{width:"100%",display:"flex", justifyContent:"space-around", alignItems:"center", marginBottom:"10px"}}>
                <img src={image} alt={name} style={{width:"70px", height:"70px", borderRadius:"50%"}}/>
                <span>{name}</span>
            </td>
        </tr>
    )
}