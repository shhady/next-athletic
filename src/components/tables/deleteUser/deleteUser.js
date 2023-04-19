import axios from 'axios';
import React,{useState, useEffect} from 'react'

export default function deleteTheUser({id, setDeleteUser, setFilteredData, filteredData}) {
    const [userToDelete, setUserToDelete] = useState({});
    console.log(id)
    // const updateMutation = useMutation(()=> deleteUser(id),{
    //     onSuccess: async ()=>{
    //         console.log("deleted");
    //         setBtnClicked('')
    // }}
    // )
    useEffect(()=>{
        const getUser = async ()=>{
            const res = await axios(`http://localhost:5000/users/${id}`);
            
            setUserToDelete(res)
        }
        getUser()
    },[])

    const confirmDeleting = async (e) => {
        e.preventDefault();
        if (id) {
            console.log(id)
          await axios.delete(`http://localhost:5000/users/${id}`)
          setFilteredData(filteredData.filter(user => user._id !== id))
        //   setBtnClicked('');
        }
      }

  return (
    <div style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
        <h2>בטוח רוצה למחוק את {userToDelete.name} ?</h2>
        <div style={{width:"100%",display:"flex", justifyContent:"space-around", alignItems:"center"}}>
        <button  style={{background:"red", width:"20%", padding:"8px"}} onClick={confirmDeleting}>כן</button>
        <button style={{ width:"20%", padding:"8px"}} onClick={()=>{setDeleteUser(false)}}>לא</button>
        </div>
    </div>
  )
}
