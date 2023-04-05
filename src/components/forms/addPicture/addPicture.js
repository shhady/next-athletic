import { useReducer } from "react"

const formReducer = (state, event) =>{
return {
  ...state,
  [event.target.name]: event.target.value
}
}


export default function addPicture() {

    const [formData, setFormData] = useReducer(formReducer,{})
    const addPhotoToGellery = (e)=>{
  e.preventDefault()
  console.log(formData)
    }
    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
     <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף תמונה לגלריה</div>
      <form onSubmit={addPhotoToGellery}>
          <input type="file" onChange={setFormData}/>    
          <input type="submit"  style={{padding: "7px"}}/> 
            </form>
      </div>
    )
  }
  