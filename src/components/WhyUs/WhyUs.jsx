import React from 'react'
import styles from "./WhyUs.module.css"
import {MdSportsGymnastics } from "react-icons/md"
import {GiWeightLiftingUp} from "react-icons/gi"
import {CgGym} from "react-icons/cg"
import {IoIosPeople} from "react-icons/io"
export default function WhyUs() {
  return (
    <div className={styles.whyUsContainer}>
        <p  style={{textAlign:'center', color:"yellow"}}> מתאימים לכל הגילאים והמינים</p>
        <h1 style={{textAlign:'center'}} >למה אנחנו? </h1>
        <div className={styles.whyUsContent}>
            <div className={styles.whyuscards}>
                <div>
             <GiWeightLiftingUp size={24} color={"#348feb"}/></div>
                <div  className={styles.whyuscardsContent}>
                <h3>אווירת חדר כושר</h3>
            <p>חדר הכושר שלנו מספק אווירה ידידותית ותומכת שעוזרת לך להרגיש בנוח ומוטיבציה במהלך האימונים שלך.
            אנו מאמינים שסביבה חיובית יכולה לעשות את כל ההבדל בכל הנוגע להשגת יעדי הכושר שלך.
            חדר הכושר שלנו הוא מרחב מסביר פנים וידידותי שבו אתה יכול להרגיש בטוח ונתמך במסע הכושר שלך.</p>
            </div>
            </div>
            <div className={styles.whyuscards}>
            <div><CgGym  size={24} color={"#348feb"}/></div>
                <div  className={styles.whyuscardsContent}>
                <h3>סוגי ציוד</h3>
                <p>אנו מציעים מגוון מקיף של ציוד חדיש שיתאים לכל רמות הכושר.
הציוד שלנו כולל הכל, ממשקולות חופשיות ומכונות התנגדות ועד מכשירי אירובי וציוד אימון פונקציונלי.
הציוד שלנו מתוחזק ומטופל באופן שוטף כדי להבטיח שהוא תמיד במצב מצוין לשימושך.</p>
</div>
            </div>
            <div className={styles.whyuscards}>
            <div><IoIosPeople size={24} color={"#348feb"}/></div>
                <div  className={styles.whyuscardsContent}>
                <h3>מאמנים</h3>
                <p>המאמנים המוסמכים שלנו נלהבים מכושר ומסורים לעזור לך להשיג את המטרות שלך.
הם יעבדו איתך על מנת לפתח תוכנית אימונים מותאמת אישית המותאמת לצרכים הספציפיים ולרמת הכושר שלך.
המאמנים שלנו בעלי ידע וניסיון בתחומם, והם תמיד זמינים לענות על כל שאלה ולספק תמיכה והכוונה.</p>
</div>
</div>
            <div className={styles.whyuscards}>
            <div><MdSportsGymnastics  size={24} color={"#348feb"}/></div>
                <div  className={styles.whyuscardsContent}>
                <h3>מקצועי וידידותי</h3>
                <p>בחדר הכושר שלנו, אנו מתגאים בכך שאנו מספקים סביבה מקצועית וידידותית.
הצוות שלנו בקיא, נגיש ותמיד מוכן לעזור.
אנו מאמינים ביצירת אווירה חיובית ותומכת בה כולם מרגישים רצויים ומעודדים להשיג את המיטב.</p></div>
        </div>
        </div>
    </div>
  )
}
