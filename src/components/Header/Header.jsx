import React, {useEffect, useState} from 'react'
import {BsInstagram, BsGrid3X3Gap, } from 'react-icons/bs'
import {FiLogIn,FiMail,FiLogOut } from 'react-icons/fi'
import {SiGoogleclassroom } from 'react-icons/si'
import {TfiGallery} from 'react-icons/tfi'
import {IoIosPeople} from 'react-icons/io'
import Image from "next/image"
import styles from "./Header.module.css"
import Link from 'next/link'
import {FaUserAlt }  from 'react-icons/fa'
import { useSession, signIn, signOut } from 'next-auth/react'
import axios from 'axios'
import { io } from "socket.io-client";

const Header = () => {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!user?._id) return;
    setSocket(
      io(
        // "https://dawrafun1.herokuapp.com/" ||
        "http://localhost:5000"
      )
    );
    // console.log(socket);
  }, [user]);
  useEffect(() => {
    if (!user?._id) return;
    socket?.emit("addUser", user?._id);
  }, [socket, user]);


  useEffect(() => {
    console.log("socket connected")
    socket?.on("getNotificationComment", (data) => {
      alert('המינוי שלך עודכן');
      console.log(data);
      const fetchNewData = async()=>{
        const result = await axios.get(`http://localhost:5000/users/${user?._id}`)
        window.localStorage.setItem("profile", JSON.stringify(result.data))
      }
      fetchNewData()
    });

  }, [socket]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userProfile = localStorage.getItem("profile");
      if (userProfile) {
        setUser(JSON.parse(userProfile));
      }
    }
  }, []);
  const [menu, setMenu] = useState(false)
  const {data: session} = useSession()
  
const handleSignOut = async () => {
  const token = window.localStorage.getItem("token")
  try {
    await axios.post("/users/logout", null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Successfully logged out");
    setUser(null)
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("profile");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
 
    
const openMenu = ()=>{
  setMenu(!menu)
}
  return (
    <div className={styles.header} dir="ltr">
          <Link href="/">
            <div> <img
              src={"/logo.png"}
              alt="Logo"
              width={100}
              height={30}
            /></div>
          </Link>
        <div className={styles.headerMiddle}>
          <Link href="/contact">  <div>צור קשר</div></Link>
          <Link href="/gallery">  <div>גלריה</div></Link>
          <Link href="/users"> <div className={styles.menuC}>מאמנים</div></Link>
          {/* <Link href="/prices">  <div>מחירים</div></Link> */}
          <Link href="/classes"> <div>חוגים</div></Link>
        </div>
        <div className={styles.instagram}>
          <div style={{display:"flex", gap:"10px"}}>
              <Link href={'https://www.instagram.com/athletic.g.y.m/'} target="_blank"  className={styles.instagramI}>
               <BsInstagram color='white' size={20}/></Link>
               <div className={styles.logIn}>
            {user ? (<div style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"10px"}}>
           
             {user.image ? (<Link href={`/users/user/${user?._id}`}>       
                   <Image src={user.image?(user.user.image) :("#")} alt={user.name} style={{borderRadius:"50%"}} width={22} height={22}/>
                   </Link>
):(
  <Link href={`/users/user/${user?._id}`}>      <FaUserAlt/></Link>
             )}
              
              <Link href="/" style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"3px"}} onClick={handleSignOut}> יציאה<FiLogOut/> </Link>
            </div>):( <Link href="/authentication/login" style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"3px"}}> כניסה<FiLogIn/> </Link>)}  
               </div>
            </div>
          
            <div className={styles.hamburger}>
          {user ? ( <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
          {user.image ? ( <Link href={`/users/user/${user?._id}`}>
            <Image src={user.image ? (user.image ):('#')} alt={user.name} style={{borderRadius:"50%"}} width={22} height={22}/>
            </Link>  
):(
  <Link href={`/users/user/${user?._id}`}>
    <FaUserAlt/>
    </Link>
             )}              </div>):(null)} 
            <BsGrid3X3Gap size={20} onClick={openMenu}/>
            </div>
            
            {menu ?  <div className={styles.headerMenu}>
              <div onClick={openMenu} className={styles.menuC}>X</div>
             
              <Link href="/classes">  <h2 className={styles.menuC}>חוגים <SiGoogleclassroom/></h2></Link>
              {/* <Link href="/prices"> <h2 className={styles.menuC}>מחירים</h2></Link> */}
              <Link href="/gallery"> <h2 className={styles.menuC}>גלריה <TfiGallery/></h2></Link>
              <Link href="/users" onClick={()=> setMenu(!menu)}> <h2 className={styles.menuC}>מאמנים<IoIosPeople/></h2></Link>
              
              <Link href="/contact"> <h2 className={styles.menuC}>צור קשר <FiMail/></h2>  </Link>
              {user ? (
              <Link href="/"><h2 className={styles.menuC} onClick={handleSignOut}> יציאה<FiLogOut/> </h2></Link>
           ):( <Link href="/authentication/login"><h2 className={styles.menuC}> כניסה<FiLogIn/></h2> </Link>)}  
        </div>:null}
            </div>
    </div>
  )
}

export default Header