
import axios from 'axios';
import React,{useState, useEffect} from 'react'

export default function DeleteClass({id, setDeleteClass, setFilteredData, filteredData}) {
    const [classToDelete, setClassToDelete] = useState({});
    console.log(id)
    console.log(filteredData)
    useEffect(()=>{
        const getClass = async ()=>{
            const res = await axios(`http://localhost:5000/classes/${id}`);
            setClassToDelete(res.data)
            console.log(res)
        }
        getClass()
    },[])

    const confirmDeleting = async (e) => {
        e.preventDefault();
        if (id) {
            console.log(id)
          await axios.delete(`http://localhost:5000/classes/${id}`)
          setFilteredData(filteredData.filter(theClass => theClass._id !== id))
        }
        console.log(filteredData)
      }

  return (
    <div style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
        <h2>בטוח רוצה למחוק את {classToDelete.className} ?</h2>
        <div style={{width:"100%",display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <button  style={{background:"red", width:"20%", padding:"8px"}} onClick={confirmDeleting}>כן</button>
        <button style={{ width:"20%", padding:"8px"}} onClick={()=>{setDeleteClass(false)}}>לא</button>
        </div>
    </div>
  )
}
