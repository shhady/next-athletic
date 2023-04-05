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
{/*         
        <div>
            <img src="https://images.unsplash.com/photo-1632781297772-1d68f375d878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="200px" height={200} style={{borderRadius:"50%"}} priority={String(true)} />
            <h3>Trainer Name</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, aspernatur!</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="200px" height={200} style={{borderRadius:"50%"}} priority={String(true)} />
            <h3>Trainer Name</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, aspernatur!</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 " alt="" width="200px" height={200} style={{borderRadius:"50%"}} priority={String(true)} />
            <h3>Trainer Name</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, aspernatur!</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1632781297772-1d68f375d878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" width="200px" height={200} style={{borderRadius:"50%"}} priority={String(true)} />
            <h3>Trainer Name</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, aspernatur!</p>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1627197843575-00cc3965c2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 " alt="" width="200px" height={200} style={{borderRadius:"50%"}} priority={String(true)} />
            <h3>Trainer Name</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, aspernatur!</p>
        </div> */}
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

