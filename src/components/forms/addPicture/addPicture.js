import { useReducer, useState, useEffect } from "react"
import axios from "axios";

const formReducer = (state, event) =>{
return {
  ...state,
  [event.target.name]: event.target.value
}
}


export default function addPicture() {
  const [user, setUser] = useState(null) 
  const [image, setImage] = useState('')

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userProfile = localStorage.getItem("profile");
      if (userProfile) {
        setUser(JSON.parse(userProfile));
      }
    }
  }, []);
  function handleOpenWidget (){
    let myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'shhady', 
      uploadPreset: 'Athletic'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          setImage(result.info.secure_url)
        }
      }
    )
    myWidget.open()
  }

  useEffect(() => {
    if(!image) return
    const uploadImage = async () => {
     const upload= await axios.post('http://localhost:5000/gallery',{
      uploaderId:user?._id,
        uploaderName:user?.name,
        image:image
      })
      console.log(upload)
    }
    uploadImage()
  },[image])
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
     <div style={{textAlign:"center", marginBottom:"15px"}}> הוסף תמונה לגלריה</div>
          <button className="upload-photo" onClick={handleOpenWidget} style={{padding: "7px", width:"100%", marginTop:"15px"}}>העלאת תמונה</button>
      </div>
    )
  }
  