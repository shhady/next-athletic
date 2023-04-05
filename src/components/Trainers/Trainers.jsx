import React from 'react'
import styles from "./Trainers.module.css"
import useSWR from "swr"
import Image from 'next/image'
import Link from 'next/link'
const fetcher = (...args)=> fetch(...args).then(res => res.json())

export default function Trainers() {
    const {user, isLoading, isError} = getData()

    if(isError) return <div>error</div>
    if(isLoading) return <div>loading ... </div>
     console.log(user)
  return (
    <div>
        <p style={{textAlign:"center", color:"yellow", marginTop:"30px"}}>צוות מאמנים מקצועי מומחים בתחומם</p>
    <h1 style={{marginBottom:"30px", textAlign:"center"}}>מאמנים</h1>
    <div className={styles.trainersHome} dir='rtl'>
        {user.map((user)=>(
            <Link href={`/trainers/${user.id}`}  key={user.id}>
            <div>
                <Image src={user.image} width={200} height={200} style={{borderRadius:"50%"}} alt={user.name}/>
                <h3>{user.name}</h3>
                <p>{user.description}</p>
            </div>
            </Link>
        ))}
    </div>
    </div>
  )
}

function getData (){
    const {data, error} = useSWR("http://localhost:3001/api/trainers",fetcher)

    return{
        user:data,
        isLoading : !error && !data,
        isError: error
    }
}

