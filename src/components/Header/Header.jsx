import React, {useState} from 'react'
import {BsInstagram, BsGrid3X3Gap} from 'react-icons/bs'
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
          <Link href="/trainers"> <div className={styles.menuC}>מאמנים</div></Link>
          <Link href="/prices">  <div>מחירים</div></Link>
          <Link href="/classes"> <div>חוגים</div></Link>
        </div>
        <div className={styles.instagram}>
          <div>
              <Link href={'https://www.instagram.com/athletic.g.y.m/'} target="_blank">
               <BsInstagram color='white' /></Link>
            </div>
           
            <div className={styles.hamburger} onClick={openMenu}>
           
            <BsGrid3X3Gap/>
            </div>
            {menu ?  <div className={styles.headerMenu}>
              <div onClick={openMenu} className={styles.menuC}>X</div>
              <Link href="/classes">  <h2 className={styles.menuC}>חוגים</h2></Link>
              <Link href="/prices"> <h2 className={styles.menuC}>מחירים</h2></Link>
              <Link href="/gallery"> <h2 className={styles.menuC}>גלריה</h2></Link>
              <Link href="/trainers" onClick={()=> setMenu(!menu)}> <h2 className={styles.menuC}>מאמנים</h2></Link>
              <Link href="/contact"> <h2 className={styles.menuC}>צור קשר</h2>  </Link>
        </div>:null}
            </div>
    </div>
  )
}

export default Header