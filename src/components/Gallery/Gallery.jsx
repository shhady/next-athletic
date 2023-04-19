import React from 'react'
import styles from "./Gallery.module.css"
import Link from 'next/link'
export default function Gallery() {
  return (
    <div dir='rtl' style={{display:"flex", flexDirection:"column"}}>
      <div>
      <p style={{textAlign:"center", color:"yellow", marginTop:"30px"}}>איך נראה החדר כושר</p>
        <h1 className={styles.titleGallery}>גלריית תמונות</h1>
        </div>
    <div className={styles.gallery}>
        {/* <div className={styles.pictureFromGallery}>
        <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              width={100}
              height={200}
              priority={String(true)} 
            />
        </div>
        <div  className={styles.pictureFromGallery}>
        <img
              src="https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
              alt="Logo"
              width={100}
              height={200} priority={String(true)} 
            />
        </div>
        <div  className={styles.pictureFromGallery}>
        <img
              src="https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              width={100}
              height={200} priority={String(true)} 
            />
        </div> */}
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>

<div style={{backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60')", width: "100%", height: "100%"}}></div>
        {/* <img
       
              src="https://images.unsplash.com/photo-1632781297772-1d68f375d878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              width={100}
              height={200} priority={String(true)} 
            /> */}
    </div>
    <div className={styles.morePhotos}>
      <Link href="/gallery">
   <span> עוד תמונות... </span>
    </Link>
    </div>
    </div>
  )
}
