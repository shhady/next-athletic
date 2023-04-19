import React , {useState,useEffect}from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import { HiEye } from "react-icons/hi";
import { useFormik } from 'formik'
import login_validate from '../../../lib/validate'
import { useRouter } from 'next/router'
import GoogleLogin from "./googleLogin"
import axios from 'axios'
export default function Login() {

  const [checkUser, setCheckUser] = useState({})
  const [show, setShow] = useState(false)
  const router = useRouter()
const formik = useFormik({
  initialValues:{
    email:'',
    password:''
  },
  validate:login_validate,
  onSubmit
})

async function onSubmit(values) {
  try{
   const result =  await axios.post('http://localhost:5000/users/login',{
      email:values.email,
      password:values.password
    })
    window.localStorage.setItem("profile", JSON.stringify(result.data.user))
    window.localStorage.setItem("token", JSON.stringify(result.data.token))
    router.push('/')
  }catch(e){
    console.log({e:"no user"})
  }
  
  // if(status.ok)
}
console.log(checkUser)


// , { callbackUrl: 'http://localhost:3001' }
  return (
    <Layout>
      <Head>
            <title>Login</title>
        </Head>
        <section style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
        <h1>כניסה</h1>
        <form onSubmit={formik.handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px", marginTop:"40px"}}>
          <input {...formik.getFieldProps('email')} type="email" name="email" placeholder="אימייל" style={{padding:"8px", width:"100%"}}/>
          <span style={{color:"red"}}>{formik.errors.email && formik.touched.email ? (formik.errors.email):(null) }</span>
        <div style={{display:"flex",justifyContent:"flex-end", alignItems:"center", position:"relative", width:"100%"}}> 
        <input {...formik.getFieldProps('password')} type={`${show ? "text":"password"}`} name="password" placeholder="סיסמה" style={{padding:"8px", width:"100%"}}/>
        <span onClick={()=>setShow(!show)} style={{position:"absolute",padding:"10px 5px"}}><HiEye/></span></div>
        <span  style={{color:"red", fontSize:"10", fontWeight:"lighter"}}>{formik.errors.password && formik.touched.password ? (formik.errors.password):(null) }</span>
          <button type='submit' style={{padding:"8px", width:"100%",margin:"10px"}}>כניסה</button>
        </form>
        {/* <GoogleLogin/> */}
        <p style={{textAlign:"center"}}>
          אין לך חשבון ?
          <Link href={"/authentication/register"} style={{color:"blueviolet"}}> צור חשבון</Link>
        </p>
        </section>
      
      </Layout>
  )
}


