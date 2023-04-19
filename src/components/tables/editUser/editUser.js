import React , {useState, useEffect}from 'react'
import styles from "../../forms/addUser/formUser.module.css"
import Format from '@/layout/format';
import { useMutation } from 'react-query';
import { updateUser } from '../../../../lib/helper';
import axios from 'axios';
export default function editUser({id, setEdit, edit, filteredData, setFilteredData,setBtnClicked, socket}) {
    const [formData, setFormData] = useState({})
   
    console.log(formData)
    useEffect(()=>{
        const getUser = async ()=>{
            const res = await fetch(`http://localhost:5000/users/${id}`);
            const user =await res.json()
            setFormData(user)
        }
        getUser()
    },[])

    const editUser = (e) => {
        e.preventDefault();
      
        // Only update the property if its value has changed
        if (formData[e.target.name] !== e.target.value) {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
      };
    
      const  submitChanges = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${id}`,
          formData
        )
        // socket.emit("sendNotificationComment", {
        //   senderName: "admin",
        // });
        socket.emit("sendNotificationComment", { receiverId: id });
        setEdit(false)
        setFilteredData(filteredData.map(obj => {
                      if (obj._id === formData._id) {
                        return  {...formData, ...filteredData};
                      } else {
                        return obj;
                      }}
                      ))
              }
      
      console.log(new Date())
  return (
    <Format>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"60vw", margin:"auto"}}>
        עדכון מינוי ללקוח
        <form onSubmit={submitChanges} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"60vw", margin:"auto"}}>
        <input type="text" name="name" defaultValue={formData.name} onChange={editUser} style={{padding: "7px", margin:"20px"}} />
        <input type="date" name="paidDate" onChange={editUser} defaultValue={new Date().toISOString()} style={{padding: "7px"}} />
        <input type="number" name="paidPeriod" placeholder="מינוי בחודשים"  onChange={editUser}  style={{padding: "7px", margin:"20px"}} />
        
        <button type="submit"  style={{padding: "7px",  minWidth:"100px"}}>חידוש</button>  
        </form>
        <button onClick={()=>setEdit(false)}  style={{padding: "8px", marginTop:"20px", background:"red", border:"none", borderRadius:"2px", minWidth:"100px"}} >ביטול</button> 
    </div>
    </Format>
  )
}
