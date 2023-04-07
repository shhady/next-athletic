import React, {useState} from 'react'
import {BsInstagram, BsGrid3X3Gap, } from 'react-icons/bs'
import {FiLogIn,FiMail } from 'react-icons/fi'
import {SiGoogleclassroom } from 'react-icons/si'
import {TfiGallery} from 'react-icons/tfi'
import {IoIosPeople} from 'react-icons/io'

import styles from "./Header.module.css"
import Link from 'next/link'
const Header = () => {

  const [menu, setMenu] = useState(false)

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
          <Link href="/prices">  <div>מחירים</div></Link>
          <Link href="/classes"> <div>חוגים</div></Link>
        </div>
        <div className={styles.instagram}>
          <div style={{display:"flex", gap:"10px"}}>
              <Link href={'https://www.instagram.com/athletic.g.y.m/'} target="_blank">
               <BsInstagram color='white' /></Link>
               <div className={styles.logIn}>
               <FiLogIn/>
               </div>
            </div>
           
            <div className={styles.hamburger} onClick={openMenu}>
           
            <BsGrid3X3Gap/>
            </div>
            {menu ?  <div className={styles.headerMenu}>
              <div onClick={openMenu} className={styles.menuC}>X</div>
              <Link href="#">  <h2 className={styles.menuC}>כניסה <FiLogIn/></h2></Link>
              <Link href="/classes">  <h2 className={styles.menuC}>חוגים <SiGoogleclassroom/></h2></Link>
              {/* <Link href="/prices"> <h2 className={styles.menuC}>מחירים</h2></Link> */}
              <Link href="/gallery"> <h2 className={styles.menuC}>גלריה <TfiGallery/></h2></Link>
              <Link href="/users" onClick={()=> setMenu(!menu)}> <h2 className={styles.menuC}>מאמנים<IoIosPeople/></h2></Link>
              <Link href="/contact"> <h2 className={styles.menuC}>צור קשר <FiMail/></h2>  </Link>
        </div>:null}
            </div>
    </div>
  )
}

export default Header