import React from 'react'
import styles from "./AboutUs.module.css"
export default function AboutUs() {
  return (
    <div className={styles.ABOUTUS}>
        <div className={styles.imageAboutUs}> <img
              src="https://images.unsplash.com/photo-1616279967983-ec413476e824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGd5bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Logo"
              className={styles.heroImage}
              
            /></div>
        <div >
            <div dir='rtl' style={{padding:"0px 20px"}}> 
            <p  style={{textAlign:"start", color:"#348feb"}}>גלה עוד</p>
            <h1  style={{textAlign:"start", marginBottom:"20px"}}>עלינו</h1>
            </div>
            <div dir='rtl' className={styles.contentAboutUs}>
              <p>המתקן שלנו מצויד בציוד הכושר החדיש ביותר שנועד לתת מענה לכל הגילאים והמינים. המטרה שלנו היא לספק סביבה נוחה וידידותית שבה תוכל להשיג את מטרות הכושר שלך. <br/>

חדר הכושר שלנו מתהדר בצוות מאמנים מקצועי מומחים בתחומם.הם מחויבים לעזור לך להשיג את יעדי הכושר שלך על ידי מתן אימונים מותאמים אישית הנותנים מענה לצרכים ולהעדפות האישיות שלך. <br/> בין אם אתה מתחיל או חובב כושר מנוסה, המאמנים שלנו כאן כדי להדריך ולתמוך בך בכל שלב.

הציוד שלנו תוכנן במיוחד כדי למקד את כל קבוצות השרירים הגדולות ולהבטיח אימון שלם. מאימוני כוח ועד אימוני כוח, הציוד שלנו מתאים לכל הגילאים והמינים. אנו מאמינים שכושר הוא לא רק פעילות גופנית, אלא דרך חיים. <br/> צוות המאמנים והצוות שלנו כאן כדי להניע ולעורר אותך לנהל אורח חיים בריא ופעיל.

הצטרפו אלינו עוד היום ועשו את הצעד הראשון לקראתכם בריאים ומאושרים יותר!</p>
            </div>
        </div>
    </div>
  )
}
