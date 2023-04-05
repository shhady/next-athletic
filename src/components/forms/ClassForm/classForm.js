import { useReducer } from "react"

const formReducer = (state, event) =>{
return {
  ...state,
  [event.target.name]: event.target.value
}
}


export default function classForm() {
    const [formData, setFormData] = useReducer(formReducer,{})
    const addClass = (e)=>{
  e.preventDefault()
  console.log(formData)
    }
    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
     <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף חוג</div>
      <form onSubmit={addClass} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <input type="text" name="name" placeholder="שם" onChange={setFormData} style={{width:"100%", padding:"7px"}}/>
          <input type="file" onChange={setFormData} style={{ margin:"15px"}}/>    
          <input type="submit"  style={{padding: "7px", width:"100%"}}/> 
            </form>
      </div>
    )
  }
  