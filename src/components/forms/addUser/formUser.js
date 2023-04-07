import styles from "./formUser.module.css"
import { useReducer } from "react"
import { useQueryClient, useMutation } from "react-query";
import { addUser , getUsers} from "../../../../lib/helper";
const formReducer = (state, event) =>{
return {
  ...state,
  [event.target.name]: event.target.value
}
}
export default function formUser() {
  const queryClient = useQueryClient()
   const [formData, setFormData] = useReducer(formReducer,{})
  const addMutation = useMutation(addUser,{
    onSuccess:()=>{
      queryClient.prefetchQuery('users', getUsers)
    }
  })
  const addUserToDataBase = async (e)=>{
e.preventDefault()
if(Object.keys(formData).length == 0 ) return console.log("no data")
 console.log(formData)
    let {name, email, password, confirmPassword, description, paidPeriod, telephone}= formData;

    const model = {
      name,email,password,confirmPassword,description, role:"user",paidDate: new Date(), paidPeriod, telephone
    }
    console.log(model)
    addMutation.mutate(model)
  }
 
  if(addMutation.isLoading) return <div>loading...</div>
  if(addMutation.isError) return <div>error...</div>
  if(addMutation.isSuccess) return <div>coach added</div>


  return (
    <div style={{display:"flex", flexDirection:"column"}}>
   <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף לקוח</div>
    <form onSubmit={addUserToDataBase} className={styles.form}>
        <div className={styles.nameAndDes}>
        <input type="text" name="name" placeholder="שם"  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="email" name="email" placeholder="אימייל"  style={{padding: "7px"}} className={styles.middleInput}  onChange={setFormData}/>
        <input type="password" name="password" placeholder="סיסמה"   style={{padding: "7px"}} onChange={setFormData}/>
        <input type="password" name="confirmPassword" placeholder="סיסמה"  className={styles.middleInput}  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="number" name="paidPeriod" placeholder="מינוי בחודשים"   style={{padding: "7px"}} onChange={setFormData}/>
        <input type="number" name="telephone" placeholder="מספר טלפון"  className={styles.middleInput}  style={{padding: "7px"}} onChange={setFormData}/>
        <input type="submit"  style={{padding: "7px"}} /> </div> 
          </form>
    </div>
  )
}
