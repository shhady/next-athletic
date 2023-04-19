
import React from 'react'
import styles from "./layout.module.css"

export default function Layout({children}) {
  return (
    <div className={styles.pageOfAuth}>
    <div className={styles.container}>
       
        <div className={styles.imageSide}></div>
        <div className={styles.loginForm}>
        {children}
        </div>
        </div>
        </div>
  )
}
