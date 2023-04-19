// import Link from 'next/link'
// import React from 'react'
// import styles from "./classes.module.css"

// export default function Claases() {
//   return (
//     <div dir='rtl' style={{display:"flex", flexDirection:"column"}}>
//       <div>
//       <p style={{textAlign:"center", color:"#348feb", marginTop:"30px"}}>תגלה את החוגים</p>
//         <h1 className={styles.titleGallery}>חוגים</h1>
//         </div>
//     <div className={styles.gallery}>
//         <div className={styles.pictureFromGallery}>
//         <img
//               src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//               alt="Logo"
//               width={200}
//               height={200}
//               priority={String(true)} 
//             />
//         </div>
       
//     </div>
//     <div className={styles.morePhotos}>
//         <Link href='/classes'>
//    <span> עוד... </span>
//     </Link>
//     </div>
//     </div>
//   )
// }

import React from 'react'
import styles from "../Trainers/Trainers.module.css"
import useSWR from "swr"
import Image from 'next/image'
import Link from 'next/link'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function Classes() {
    const {theClass, isLoading, isError} = getData()
    
    if(isError) return <div>error</div>
    if(isLoading) return <div>loading ... </div>

    console.log(theClass)
    
  return (
    <div>
        <p className={styles.parag} style={{color:"#348feb"}}> תגלה את החוגים</p>
    <h1 style={{marginBottom:"30px", textAlign:"center"}}>חוגים</h1>
    <div className={styles.trainersHome} dir='rtl'>
        {theClass.map((theclass)=>(
            <Link href={`/classes/${theclass._id}`}  key={theclass._id}>
            <div className={styles.imgAndText}>
                <Image src={theclass.image} width={150} height={150} style={{borderRadius:"50%"}} alt={theclass.className}/>
                <h3>{theclass.className}</h3>
                <h5>{theclass.coach}</h5>
            </div>
            </Link>
        ))}
    </div>
    <div className={styles.morePhotos}>
        <Link href='/classes'>
   <span> עוד... </span>
    </Link>
    </div>
    </div>
  )
}

function getData (){
    const {data, error} = useSWR("http://localhost:5000/classes",fetcher)

    return{
        theClass:data,
        isLoading : !error && !data,
        isError: error
    }
}

