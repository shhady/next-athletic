import React from 'react'
import styles from "./Hero.module.css"
export default function Hero() {
  return (
    <div className={styles.hero}>
    <div className={styles.coverMain}>
    <h1 className={styles.TITLE}>
     תתחיל את <br/>  המסע שלך 
     <span className={styles.TODAY}> היום</span>
    </h1>
    <p style={{background:"transparent"}}>   ותתחיל להתקרב לגוף שחלמת עליו ATHLETIC תצטרף ל</p>
    <div>
     <button className={styles.joinNow}>תצטרף עכשיו</button>
    </div>
    </div>
    </div>
  )
}
