import React from 'react'
import styles from "./Pricing.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper';
import 'swiper/css';
import Image from "next/image"
export default function Pricing() {
    SwiperCore.use([Autoplay])
  return (
    <div className={styles.swiper}>
        <p style={{textAlign:"center", color:"#348feb", marginTop:"20px"}}>כניסה חד פעמית 50 ש"ח</p>
        <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000
      }}
    >
      <SwiperSlide>
        
        <h2 style={{textAlign:"center"}}>גברים</h2>
        <div className={styles.divImageSwiperMen}>
        
        {/* <Image src={"/m-t-p.png"} layout="fill" priority className={styles.imageSwiper}/> */}
        </div>
        
      </SwiperSlide>
      <SwiperSlide><h2  style={{textAlign:"center"}}>נשים</h2>
        <div  className={styles.divImageSwiperWomen}>
        {/* <Image src={"/w-t-p.png"} layout="fill" priority  className={styles.imageSwiper}> */}
            {/* <div className={styles.cover}></div> */}
        {/* </Image> */}
        </div></SwiperSlide>
    </Swiper>
    </div>
  )
}
