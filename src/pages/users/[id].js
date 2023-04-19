import React from 'react'
import Format from '@/layout/format'
import {getUsers} from "../../../lib/helper"
import styles from  "./trainer.module.css"
import Image from 'next/image'
import fetcher from '../../../lib/fetcher'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import useSWR from "swr"


export default function Trainer ({fallback}){
  const router = useRouter()
  const {id} = router.query

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
console.log(id)
const { data, error } = useSWR(`http://localhost:5000/users/${id}`, fetcher);
console.log(data)
return(

<>
  <SWRConfig value={fallback}>
   
     <Artice {...data}></Artice>
     </SWRConfig>
   </> 
)

}

function Artice({name, avatar, description}) {
  return (
    <Format>
      <div className={styles.trainer}>
          <div>
            <Image src={avatar} alt={name} width={200} height={200} style={{borderRaduis:"50%"}} priority/>
          </div>
          <div>{name}</div>
          <div>{description}</div>
      </div> 
    </Format>
  )
}

// export async function getStaticProps({ params }) {
//   console.log('params.id:', params.id);
//   const trainer = await getUsers(params.id);
//   console.log('trainer:', trainer);
//   return {
//     props: {
//       fallback:{
//         'api/users': trainer
//       }
//     },
//   };
// }
// export async function getStaticPaths(){
//   const trainer = await getUsers()

//   const paths = trainer.map((value)=>{
//       return {
//           params: {
//             id:value._id.toString()
//       }}
//   })
//   return {paths, 
//   fallback: false}
// }