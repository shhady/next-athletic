import React , {useState, useEffect}from 'react'
import styles from "../../forms/addUser/formUser.module.css"
import Format from '@/layout/format';

import axios from 'axios';
export default function EditClass({id, setEdit, edit, filteredData, setFilteredData,setBtnClicked}) {
    const [formData, setFormData] = useState({})
    const defaultClassDay = formData.classDay;
    console.log(formData)
    useEffect(()=>{
        const getClass = async ()=>{
            const res = await fetch(`http://localhost:5000/classes/${id}`);
            const theClass =await res.json()
            setFormData(theClass)
        }
        getClass()
    },[])

    const editClass = (e) => {
        e.preventDefault();
      
        // Only update the property if its value has changed
        if (formData[e.target.name] !== e.target.value) {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
      };
    
      const  submitChanges = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/classes/${id}`,
          formData
        )
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
        עדכון חוג
        <form onSubmit={submitChanges} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"60vw", margin:"auto"}}>
        <input type="text" name="className" defaultValue={formData.className} onChange={editClass} style={{width:"100%", padding: "7px", margin:"20px"}} />
        <input type="date" name="classDate" onChange={editClass} defaultValue={formData.classDate} style={{width:"100%", padding: "7px", margin:"20px"}} />
        <input type="time" name="classTime" onChange={editClass} defaultValue={formData.classTime} style={{width:"100%", padding: "7px", margin:"20px"}} />
        <select
          style={{width:"100%", padding:"7px", margin:"20px"}}
            onChange={editClass}
            required
            name="classDay"
          >
            <option value={defaultClassDay}>{defaultClassDay? (defaultClassDay):("יום")}</option>
            <option value="ראשון">ראשון</option>
            <option value="שני">שני</option>
            <option value="שלישי">שלישי</option>
            <option value="רביעי">רביעי</option>
            <option value="חמישי">חמישי</option>
            <option value="שישי">שישי</option>
            <option value="שבת">שבת</option>
          </select>
          <input type="number" name="maxUsers" onChange={editClass} defaultValue={formData.maxUsers} style={{width:"100%", padding: "7px", margin:"20px"}} />

        <button type="submit"  style={{padding: "7px",  minWidth:"150px", margin:"20px"}} defaultValue={formData.maxUsers}>חידוש</button>  
        </form>
        <button onClick={()=>setEdit(false)}  style={{padding: "8px", marginTop:"20px", background:"red", border:"none", borderRadius:"2px", minWidth:"150px"}} >ביטול</button> 
    </div>
    </Format>
  )
}
