import React , {useState, useEffect}from 'react'
import styles from "../../forms/addUser/formUser.module.css"
import Format from '@/layout/format';
import { useMutation } from 'react-query';
import { updateUser } from '../../../../lib/helper';
export default function editUser({id, setEdit, edit, filteredData, setFilteredData,setBtnClicked}) {
    const [formData, setFormData] = useState({})
    const updateMutation = useMutation((newData)=> updateUser(id, newData),{
        onSuccess: async (data)=>{
            console.log("updated");
            setBtnClicked('')
            setFilteredData(filteredData.map(obj => {
                if (obj._id === formData._id) {
                  return  {...formData, ...data};
                } else {
                  return obj;
                }}
                ))
        }
    })
    useEffect(()=>{
        const getUser = async ()=>{
            const res = await fetch(`http://localhost:3000/api/users/${id}`);
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
        console.log(formData)
        await updateMutation.mutate(formData);
        setEdit(false)
      }
      console.log(new Date())
  return (
    <Format>
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"60vw", margin:"auto"}}>
        עדכון מינוי ללקוח
        <form onSubmit={submitChanges} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:"60vw", margin:"auto"}}>
        <input type="text" name="name" defaultValue={formData.name} onChange={editUser} style={{padding: "7px", margin:"20px"}} />
        <input type="text" name="paidDate" onChange={editUser} defaultValue={new Date().toISOString()} style={{padding: "7px"}} />
        <input type="number" name="paidPeriod" placeholder="מינוי בחודשים"  onChange={editUser}  style={{padding: "7px", margin:"20px"}} />
        <input type="submit"  style={{padding: "7px"}} />  
        </form>
        <button onClick={()=>setEdit(false)}  style={{padding: "8px", marginTop:"20px", background:"red", border:"none", borderRadius:"2px"}} >Cancel</button> 
    </div>
    </Format>
  )
}
