import React, {useEffect, useState} from 'react'
import Format from '@/layout/format'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import useSWR from "swr"
import axios from 'axios'

export default function Trainer ({fallback}){
  const router = useRouter()
  const {id} = router.query
  const [formData, setFormData] = useState({})
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
console.log(id)
const { data, error } = useSWR(`http://localhost:5000/users/${id}`, fetcher);

useEffect(()=>{
  setFormData(data)
},[data])
console.log(formData._id)
return(

<>
  <SWRConfig value={fallback}>
   
     <Artice {...data} setFormData={setFormData} formData={formData}></Artice>
     </SWRConfig>
   </> 
)

}

function Artice({name, avatar, description, paidDate,paidPeriod, setFormData, formData , _id}) {4
  console.log(_id)
  const token = window.localStorage.getItem("token")
  console.log(token)
  const [showInputs, setShowInputs] = useState(false)
    const today = new Date();
    const paidDate1 = new Date(paidDate);
    const paidPeriod1 = paidPeriod * 30;
    const daysLeft = Math.round(paidPeriod1 - ((today - paidDate1 ) / (1000 * 60 * 60 * 24)))
    const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const changePass = async () => {
    // try {
    //   if (!password) return;
      // const token = localStorage.getItem("token");
      // const config = {
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json;charset=UTF-8",
      //     "Access-Control-Allow-Methods": "PATCH",
      //     "Access-Control-Allow-Origin": "*",
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      // const body = { password, confirmPassword }; 
      // const token = window.localStorage.getItem("token")
      // try {
      //   await axios.patch(`http://localhost:5000/users/${_id}`, body, {
      //     headers: {
      //           Accept: "application/json",
      //           "Content-Type": "application/json;charset=UTF-8",
      //           "Access-Control-Allow-Methods": "PATCH",
      //           "Access-Control-Allow-Origin": "*",
      //           Authorization: `Bearer ${token}`,
      //         },
      //   });
      //   console.log("Successfully change password");
      //   // setUser(null)
      //   // window.localStorage.removeItem("token");
      //   // window.localStorage.removeItem("profile");
      // } catch (error) {
      //   console.error("Error logging out:", error);
      // }
    }
      // await axios.patch(`http://localhost:5000/users/${_id}`, body);
      // setMessage("تم تغيير كلمة المرور بنجاح");
    // } catch (err) {
      // setMessage(
      //   "لم تتم عملية التغيير,كلمة المرور يجب ان تتكون من 6 ارقام او احرف على الاقل, حاول مرة اخرى وتأكد من تطابق كلمة المرور وتأكيد كلمة المرور"
      // );
      // console.log(err + "can't");
    // }
  // };
const cancelChangingPassword =()=>{
  setShowInputs(!formData)

}

  return (
    <Format>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <div>
            <Image src={avatar} alt={name} width={200} height={200} style={{borderRaduis:"50%"}} priority/>
          </div>
          <div>שם: {name}</div>
          {daysLeft > 0 ? (<><div>תחילת מינוי: {paidDate?.slice(0,10)}</div>
          <div>תקופת מינוי: {paidPeriod} חודשים</div>
          
          <div>נשאר: {daysLeft} ימים</div></>):(<>המינוי נגמר, הינך מוזמן לחדש</>)}  
        {showInputs ? (<div style={{marginTop:"25px",display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", minWidth:"200px", height:"200px"}}>
              <input type="text" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="סיסמה חדשה" style={{width:"100%", padding:"10px"}}/>
              <input type="text"name="confirmPassword" onChange={(e) => {setConfirmPassword(e.target.value)}} placeholder="אימות סיסמה"  style={{width:"100%", padding:"10px"}}/>
              <button onClick={changePass}  style={{width:"100%", padding:"10px"}}>אישור</button>
              <button onClick={cancelChangingPassword}  style={{width:"100%", padding:"10px"}}>ביטול</button>
          </div> ):(          <button onClick={()=> setShowInputs(!showInputs)} style={{ width: "fit-content", padding: "10px",marginTop:"20px" }}>שינוי סיסמה</button>
)}         
      </div> 
    </Format>
  )
}

// export async function getStaticProps({ params }) {
//   console.log('params.id:', params.id);
//   const trainer = await getUsers(params.id);
//   console.log('trainer:', trainer);
//   return {
//     props: {
//       fallback:{
//         'api/users': trainer
//       }
//     },
//   };
// }
// export async function getStaticPaths(){
//   const trainer = await getUsers()

//   const paths = trainer.map((value)=>{
//       return {
//           params: {
//             id:value._id.toString()
//       }}
//   })
//   return {paths, 
//   fallback: false}
// }