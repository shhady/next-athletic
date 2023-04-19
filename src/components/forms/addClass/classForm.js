import { useState } from "react"

import axios from "axios";



export default function classForm() {
    const [formData, setFormData] = useState({})
  

    function handleOpenWidget (){
      let myWidget = window.cloudinary.createUploadWidget({
        cloudName: 'shhady', 
        uploadPreset: 'Athletic'}, (error, result) => { 
          if (!error && result && result.event === "success") { 
            console.log('Done! Here is the image info: ', result.info); 
            setFormData({...formData, image:result.info.secure_url})
          }
        }
      )
      myWidget.open()
    }
  
    console.log(formData)
  
    const userOBJ =(event)=>{
      setFormData({...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (e)=>{
  e.preventDefault()
  if(Object.keys(formData).length == 0 ) return console.log("no data")
  const theClass = await axios.post('http://localhost:5000/classes',
        formData
      )
      console.log(theClass)
    }
   
 
  
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
     <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף חוג</div>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <input type="text" name="className" placeholder="שם חוג" onChange={userOBJ} style={{width:"100%", padding:"7px"}}/>
            <input type="date" name="classDate" placeholder="תאריך" onChange={userOBJ} style={{width:"100%", padding:"7px"}}/>
            <select
          style={{width:"100%", padding:"7px"}}
            onChange={userOBJ}
            required
            name="classDay"
          >
            <option value="">יום</option>
            <option value="ראשון">ראשון</option>
            <option value="שני">שני</option>
            <option value="שלישי">שלישי</option>
            <option value="רביעי">רביעי</option>
            <option value="חמישי">חמישי</option>
            <option value="שישי">שישי</option>
            <option value="שבת">שבת</option>
          </select>
            <input type="time" name="classTime" placeholder="תאריך" onChange={userOBJ} style={{width:"100%", padding:"7px"}}/>
            <input type="number" name="maxUsers" placeholder="עד כמה אנשים" onChange={userOBJ} style={{width:"100%", padding:"7px"}}/>
            <input type="text" name="coach" placeholder="מאמן" onChange={userOBJ} style={{width:"100%", padding:"7px"}}/>
            <button className="upload-photo" type="button" onClick={handleOpenWidget} style={{padding: "7px", width:"100%", marginTop:"15px"}} >העלאת תמונה</button>
          <input type="submit"  style={{padding: "7px", width:"100%", marginTop:"15px"}}/> 
            </form>
      </div>
    )
  }
  