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
        const trainers = user?.filter(u=>u.role === 'coach');
        console.log(trainers)
    
  return (
    <div>
        <p className={styles.parag}>צוות מאמנים מקצועי מומחים בתחומם</p>
    <h1 style={{marginBottom:"30px", textAlign:"center"}}>מאמנים</h1>
    <div className={styles.trainersHome} dir='rtl'>
        {trainers.map((user)=>(
            <Link href={`/users/${user._id}`}  key={user._id}>
            <div className={styles.imgAndText}>
                <Image src={user.avatar} width={150} height={150} style={{borderRadius:"50%"}} alt={user.name}/>
                <h3>{user.name}</h3>
                {/* <p>{user.description}</p> */}
            </div>
            </Link>
        ))}
    </div>
    </div>
  )
}

function getData (){
    const {data, error} = useSWR("http://localhost:5000/users",fetcher)

    return{
        user:data,
        isLoading : !error && !data,
        isError: error
    }
}

