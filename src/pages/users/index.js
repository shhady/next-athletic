import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Format from '@/layout/format';
import styles from './trainers.module.css'
// import getTrainers from '../../../lib/helper';
import fetcher from '../../../lib/fetcher';
// import useSWR from "swr"
// const fetcher = (...args)=> fetch(...args).then(res => res.json())
export default function trainers() {
    const {data, isLoading, isError} = fetcher('api/users');
    console.log(data)

    // const {user, isLoading, isError} = getData()
    // getTrainers().then(res => console.log(res))
    if(isError) return <div>error</div>
    if(isLoading) return <div>loading ... </div>
    const trainers = data?.filter(u=>u.role === 'trainer');
    console.log(trainers)
    //  console.log(user)
  return (
    <Format>
        <h1 style={{textAlign:"center", margin:"20px"}}>המאמנים</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:"20px"}}>
        {
        trainers.map((value, index)=>(
            <Trainer data={value} key={index}></Trainer>
            // <Link key={t.id} href={`/trainers/${t.id}`}>
            // <div
            // style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}
            // // key={t.id}
            // // onClick={router.push('/trainers/${t.id}')}
            // >
            //     <img src={t.image} width={150} height={150} priority={String(true)}  style={{borderRadius:"50%"}}/>
            //     <h3>{t.name}</h3>
            //     <p>{t.description}</p>
            //     </div>
            //     </Link>
        ))
    }
    </div>
    </Format>
  )
}


function Trainer ({data}){
    const {_id, avatar, name, description} = data
return (
        <Link key={_id} href={`/users/${_id}`}>
        <div
        style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}
        >
            <img src={avatar || '/'} width={150} height={150} priority={String(true)}  style={{borderRadius:"50%"}}/>
            <h3>{name || 'unknown'}</h3>
            <p>{description || 'no description'}</p>
            </div>
            </Link>
)}
