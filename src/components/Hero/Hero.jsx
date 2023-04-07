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
    <p style={{background:"transparent", textAlign:'center'}}>תהפוך את הגוף ותשדרג את הכושר. הצטרף עכשיו לחוויה שתשנה את חייך!
</p>
    <div>
     <button className={styles.joinNow}>צור קשר</button>
    </div>
    </div>
    </div>
  )
}
