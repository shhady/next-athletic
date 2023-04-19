import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Format from '@/layout/format';
import styles from '../users/trainers.module.css'
// import getTrainers from '../../../lib/helper';
// import fetcher from '../../../lib/fetcher';
import useSWR from "swr"
// const fetcher = (...args)=> fetch(...args).then(res => res.json())
export default function classes() {
    // const {data, isLoading, isError} = fetcher('api/classes');
    // console.log(data)
    const fetcher = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    };
    
    const { data, error } = useSWR('http://localhost:5000/classes', fetcher);
    console.log(data)
    // const {user, isLoading, isError} = getData()
    // getTrainers().then(res => console.log(res))
    // if(isError) return <div>error</div>
    // if(isLoading) return <div>loading ... </div>
    //  console.log(user)
  return (
    <Format>
        <h1 style={{textAlign:"center", margin:"20px"}}>חוגים</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:"20px"}}>
        {
        data?.map((t)=>(
            // <TheClass data={value} key={index}></TheClass>
            <Link key={t.id} href={`/classes/${t._id}`}>
            <div
            style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}
            // key={t.id}
            // onClick={router.push('/trainers/${t.id}')}
            >
                <img src={t.image} width={150} height={150} priority={String(true)}  style={{borderRadius:"50%"}}/>
                <h3>{t.className}</h3>
                <p>{t.coach}</p>
                </div>
                </Link>
        ))
    }
    </div>
    </Format>
  )
}


function TheClass ({data}){
    const {_id,image, className, coach} = data
return (
        <Link key={_id} href={`/classes/${_id}`}>
        <div
        style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}
        >
            <img src={image || '/'} width={150} height={150} priority={String(true)}  style={{borderRadius:"50%"}}/>
            <h3>{className || 'unknown'}</h3>
            <p>{coach || 'no description'}</p>
            </div>
            </Link>
)}
