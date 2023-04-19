import React , {useState}from 'react'
import Head from 'next/head'
import Layout from '@/layout/layout'
import Link from 'next/link'
import { HiEye } from "react-icons/hi";
import { useFormik } from 'formik'
import {registerValidate}   from "../../../lib/validate"
import axios from 'axios';
export default function Register() {
     const [show, setShow] = useState({password: false, confirmPassword: false})

     const formik = useFormik({
        initialValues:{
        name:'',
          email:'',
          password:'',
          confirmPassword:'',
          phone:''
        },
        validate: registerValidate,
        onSubmit
      })
      async function onSubmit(formData) {
        if(Object.keys(formData).length == 0 ) return console.log("no data")
 console.log(formData)
        await axios.post('http://localhost:5000/users',
          formData
        )
      }
  
     return (
    <Layout>
        <Head>
            <title>Register</title>
        </Head>
        <section style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"}}>
        <h1>צור חשבון</h1>
        <form onSubmit={formik.handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"5px", marginTop:"40px"}}>
        <input {...formik.getFieldProps('name')} type="text" name="name"   placeholder="שם" style={{padding:"8px", width:"100%"}}  />
        <span style={{color:"red"}}>   {formik.errors.name && formik.touched.name ? (formik.errors.name):(null) } </span>
          <input {...formik.getFieldProps('email')} type="email" name="email" placeholder="אימייל" style={{padding:"8px", width:"100%"}}/>
          <span style={{color:"red"}}>{formik.errors.email && formik.touched.email ? (formik.errors.email):(null) }</span>
        <div style={{display:"flex",justifyContent:"flex-end", alignItems:"center", position:"relative", width:"100%"}}> 
       <input {...formik.getFieldProps('password')} type={`${show.password ? "text":"password"}`} name="password" placeholder="סיסמה" style={{padding:"8px", width:"100%"}}/>
        <span onClick={()=>setShow({...show, password:!show.password})} style={{position:"absolute",padding:"10px 5px"}}><HiEye/></span></div> 
        <span style={{color:"red"}}>  {formik.errors.password && formik.touched.password ? (formik.errors.password):(null) }</span>
        <div style={{display:"flex",justifyContent:"flex-end", alignItems:"center", position:"relative", width:"100%"}}> 
        <input {...formik.getFieldProps('confirmPassword')} type={`${show.confirmPassword ? "text":"password"}`} name="confirmPassword" placeholder="אשר סיסמה" style={{padding:"8px", width:"100%"}}/>
        <span onClick={()=>setShow({...show, confirmPassword:!show.confirmPassword})} style={{position:"absolute",padding:"10px 5px"}}><HiEye/></span></div>
        <span style={{color:"red"}}>   {formik.errors.confirmPassword && formik.touched.confirmPassword ? (formik.errors.confirmPassword):(null) }</span>
        <input {...formik.getFieldProps('phone')} type="number" name="phone"   placeholder="מספר טלפון" style={{padding:"8px", width:"100%"}}/>
        <span style={{color:"red"}}>   {formik.errors.phone && formik.touched.phone ? (formik.errors.phone):(null) } </span>
          <button type='submit' style={{padding:"8px", width:"100%",margin:"10px"}}>צור חשבון</button>
        </form>
        <p style={{textAlign:"center"}}>
          יש לך חשבון ?
          <Link href={"/authentication/login"} style={{color:"blueviolet"}}> כניסה</Link>
        </p>
        </section>
        
        </Layout>
  )
}
