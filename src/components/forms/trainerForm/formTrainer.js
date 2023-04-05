import styles from "./formTrainer.module.css"
import { useReducer } from "react"

const formReducer = (state, event) =>{
return {
  ...state,
  [event.target.name]: event.target.value
}
}
export default function formTrainer() {

  const [formData, setFormData] = useReducer(formReducer,{})
  const addTrainerToDataBase = (e)=>{
e.preventDefault()
if(Object.keys(formData).length == 0 ) return console.log("no data")
 console.log(formData)
  }
  
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
   <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף מאמן</div>
    <form onSubmit={addTrainerToDataBase} className={styles.form}>
        <div className={styles.nameAndDes}>
        <input type="text" name="name" placeholder="שם"  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="text" name="description" placeholder="תיאור" className={styles.middleInput}  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="file" name="image"onChange={setFormData}/></div>
        <div className={styles.nameAndDes}>
        <input type="email" name="email" placeholder="אימייל"  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="password" name="password" placeholder="סיסמה"  className={styles.middleInput}  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="submit"  style={{padding: "7px"}} /> </div> 
          </form>
    </div>
  )
}
