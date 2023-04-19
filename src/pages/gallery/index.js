import React, { useEffect , useState} from 'react'
import Format from '@/layout/format';
import useSWR from 'swr';
import axios from 'axios';
import styles from "./galleryPage.module.css"
import Photo from './photo';
export default function Gallery() {

  const [images, setImages]= useState([]);
  const [user, setUser] = useState(null) 
  const [image, setImage]= useState('');
  const [imageId, setImageId] = useState('')
  const [showPhoto, setShowPhoto] = useState(false);
  const [canUpload, setCanUpload] = useState(null)
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
          setImages([...images, result.info.secure_url])
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
  const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  
  const { data, error } = useSWR('http://localhost:5000/gallery', fetcher);
  useEffect(()=>{
    setImages(data)
  },[data])

  useEffect (()=>{
    console.log(user?.paidDate)
    if(!user) return;
    if(!user?.paidDate) return;
    const today = new Date();
    const paidDate1 = new Date(user?.paidDate);
    const paidPeriod1 = user?.paidPeriod * 30;
    console.log(paidPeriod1 - ((today - paidDate1 ) / (1000 * 60 * 60 * 24)))
    if(paidPeriod1 - (Math.round((today - paidDate1 ) / (1000 * 60 * 60 * 24))) > 0){
      setCanUpload("canUpload");
      console.log("hiiiii")
    }
  },[user])
  return (
    <Format>
      {showPhoto ? (<Photo imageId={imageId} setShowPhoto={setShowPhoto}/>):( <> <div style={{padding:"15px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      {canUpload || user?.role === "coach" || user?.role === "admin" ? ( <button className="upload-photo" onClick={handleOpenWidget} style={{padding: "7px"}}>העלאת תמונה</button>):(null)} 
        </div>
      <div className={styles.galleryPage}> {images?.map((img)=>
      <div className={styles.imagesInGallery} key={img._id}>
      <div onClick={()=>{setShowPhoto(true); setImageId(img._id)}} 
      style={{backgroundImage: `url(${img.image})`}}
       className={styles.imageGallery}
       >
      </div>
      <span>צילום:  {img.uploaderName?.split(" ")[0]}</span> </div>
      )}</div></>)}
    </Format>
  )
}
