import React from 'react'
import Format from '@/layout/format'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import useSWR from "swr"
import Link from "next/link"

export default function Photo ({fallback, imageId,setShowPhoto}){
  const router = useRouter()
  const {id} = router.query

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
console.log(id)
const { data, error } = useSWR(`http://localhost:5000/gallery/${imageId}`, fetcher);
console.log(data)
return(

<>
  <SWRConfig value={fallback}>
   
     <Artice {...data} setShowPhoto={setShowPhoto}></Artice>
     </SWRConfig>
   </> 
)

}

function Artice({image, uploaderName,setShowPhoto}) {
  return (
    // <Format>
      <div style={{backgroundImage: `url(${image})`, height:"70vh", width:"100vw", 
      backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain', position:"relative"}} 
       onClick={()=>setShowPhoto(false)}
       >
        {/* <Link href='/gallery'> */}
        <div style={{position:"absolute", top:"0", right:"10px"}} onClick={()=>setShowPhoto(false)}>X</div>
        {/* </Link> */}
      </div> 
    // </Format>
  )
}
