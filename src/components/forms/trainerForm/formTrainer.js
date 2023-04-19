import styles from "./formTrainer.module.css"
import { useState } from "react"
import axios from "axios";

export default function formTrainer() {
 
   const [formData, setFormData] = useState({role:"coach"})

   
   function handleOpenWidget (){
    let myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'shhady', 
      uploadPreset: 'Athletic'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          setFormData({...formData, avatar:result.info.secure_url})
        }
      }
    )
    myWidget.open()
  }

  console.log(formData)

  const userOBJ =(event)=>{
    setFormData({...formData, [event.target.name]: event.target.value });
  }
  const addTrainerToDataBase = async (e)=>{
e.preventDefault()
e.preventDefault();
      const coach = await axios.post('http://localhost:5000/users',
        formData
      )
      console.log(coach.data)
  }
 


  return (
    <div style={{display:"flex", flexDirection:"column"}}>
   <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף מאמן</div>
   <form onSubmit={addTrainerToDataBase} className={styles.form}>
        <div className={styles.nameAndDes}>
        <input type="text" name="name" placeholder="שם"  style={{padding: "7px"}} onChange={userOBJ}/>
        <input type="text" name="description" placeholder="תיאור" className={styles.middleInput}  style={{padding: "7px"}} onChange={userOBJ}/>
        <input type="email" name="email" placeholder="אימייל"  style={{padding: "7px"}} className={styles.middleInput}  onChange={userOBJ}/>
        <input type="password" name="password" placeholder="סיסמה"   style={{padding: "7px"}} onChange={userOBJ}/>
        <input type="password" name="confirmPassword" placeholder="סיסמה"  className={styles.middleInput}  style={{padding: "7px"}} onChange={userOBJ}/>
        <input type="number" name="phone" placeholder="מספר טלפון"  className={styles.middleInput}  style={{padding: "7px"}} onChange={userOBJ}/>
        <button className="upload-photo" type="button" onClick={handleOpenWidget} style={{padding: "7px", width:"100%", marginTop:"15px"}} >העלאת תמונה</button>
        <input type="submit"  style={{padding: "7px", width:"100%", marginTop:"15px"}} /> </div> 
          </form>
    </div>
  )
}

