import React, { useEffect, useState } from 'react'
import Format from '@/layout/format'
import styles from  "../users/trainer.module.css"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import useSWR from "swr"
import axios from 'axios'
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function theClass ({fallback}){
  const [user, setUser] = useState('')
  const [formData, setFormData] = useState([])
  const [updateDataBase, setUpdateDataBase] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userProfile = localStorage.getItem("profile");
      if (userProfile) {
        setUser(JSON.parse(userProfile));
      }
    }
  }, []);
  
  const router = useRouter()
  const {id} = router.query
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const { data, error } = useSWR(`http://localhost:5000/classes/${id}`, fetcher);


useEffect(()=>{
  setFormData(data)
},[data])


useEffect(()=>{
  const updateAttending = async ()=>{
    if(id){
const update = await axios.put(`http://localhost:5000/classes/${id}`,
    formData)
    console.log(update.data)
    }
    
  }
  updateAttending()
},[updateDataBase])

return(

<>
  <SWRConfig value={fallback}>
   
     <Artice formData={formData} setFormData={setFormData} user={user} updateDataBase={updateDataBase} id={id} setUpdateDataBase={setUpdateDataBase}></Artice>
     </SWRConfig>
   </> 
)

}

function Artice({formData,setFormData,user,setUpdateDataBase, updateDataBase,id }) {
  const [canUpload,setCanUpload] = useState(null)
  const addUserToClass = ()=>{
    if(formData.attending.length >= formData.maxUsers) return;
    const updatedAttending = [...formData.attending, { userName: user.name }];
    setFormData({ ...formData, attending: updatedAttending });
    setUpdateDataBase(!updateDataBase)
    console.log(updateDataBase)
    socket.emit("sendNotification")

  }
  const removeUserFromClass =()=>{
    const updatedAttending = [...formData.attending];
    const userIndex = updatedAttending.findIndex(attending => attending.userName === user.name);
    if (userIndex >= 0) {
      updatedAttending.splice(userIndex, 1); // remove the user from the array
    } 
     setFormData({ ...formData, attending: updatedAttending });
     setUpdateDataBase(!updateDataBase)
    socket.emit("sendNotification")
  }
  useEffect(() => {
    console.log("socket connected")
    socket.on("getNotification", () => {
      console.log(updateDataBase)
      
      const res = async()=>{
        if(id){
          const response = await axios.get(`http://localhost:5000/classes/${id}`)
          setFormData(response.data)
        }
      }
      res()
    });
  }, [socket,id,updateDataBase]);

  
  useEffect (()=>{
    if(!user) return;
    if(!user?.paidDate) return;
    const today = new Date();
    const paidDate1 = new Date(user?.paidDate);
    const paidPeriod1 = user?.paidPeriod * 30;
    console.log(paidPeriod1 - ((today - paidDate1 ) / (1000 * 60 * 60 * 24)))
    if(paidPeriod1 > (Math.round((today - paidDate1 ) / (1000 * 60 * 60 * 24)))){
      setCanUpload("canUpload");
    }
  },[user])
  return (
    <Format>
      <div className={styles.trainer}>
          <div>
            <Image src={formData?.image} alt={formData?.className} width={200} height={200} style={{borderRaduis:"50%"}} priority/>
          </div>
          <div>
          <div>חוג: {formData?.className}</div>
          <div>תאריך: {formData?.classDate?.slice(0,10)}</div>
          <div>שעה: {formData?.classTime}</div>
          <div>יום: {formData?.classDay}</div>
          <div>מאמן: {formData?.coach}</div>
          </div>
          <div style={{ width: "60vw", padding: "10px", margin: "30px",textAlign:"center", border:"1px solid white" }}>נרשמו: {formData?.attending?.length} / {formData?.maxUsers}</div>

          <div style={{borderBottom:"1px solid grey"}}>
          {canUpload ? (<> {formData?.attending?.some(attending => attending.userName === user.name) ? (
  <button
  style={{ width: "60vw", padding: "10px", marginBottom: "30px" }}
  onClick={removeUserFromClass}
>
  ביטול הצטרפות
</button>
) : (
  <button
    style={{ width: "60vw", padding: "10px", marginBottom: "30px" }}
    onClick={addUserToClass}
  >
    הצטרף
  </button>
)}
 <div>
    {formData?.attending?.map((attending, i)=>(
      <div key={i}  style={{ width: "40vw", padding: "10px", margin: "10px auto",textAlign:"center", border:"1px solid white" }}>{i+1}:  {attending.userName.split(" ")[0]}</div>
    ))}
      </div>
</>):(<>חייב מינוי בכדי להצטרף לחוג</>)}
          
         
          </div>
      </div> 
     
    </Format>
  )
}

// export async function getStaticProps({ params }) {
//   console.log('params.id:', params.id);
//   const theClass = await getClasses(params.id);
//   console.log('theClass:', theClass);
//   return {
//     props: {
//       fallback:{
//         'api/classes': theClass
//       }
//     },
//   };
// }
// export async function getStaticPaths(){
//   const theClass = await getClasses()

//   const paths = theClass.map((value)=>{
//       return {
//           params: {
//             id:value._id.toString()
//       }}
//   })
//   return {paths, 
//   fallback: false}
// }