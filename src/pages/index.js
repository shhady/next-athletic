import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import Hero from "../components/Hero/Hero"
import AboutUs from '@/components/AboutUs/AboutUs'
import WhyUs from '@/components/WhyUs/WhyUs'
import Pricing from '@/components/Pricing/Pricing'
import Trainers from '@/components/Trainers/Trainers'
import Gallery from '@/components/Gallery/Gallery'
import Format from '@/layout/format'
import Classes from '@/components/classes/classes'
export default function Home() {
  
  return (
    <>
    <Format>
    <Hero/>
      <AboutUs/>
      <WhyUs/>
      <Pricing/>
      <Trainers/>
      <Classes/>
      <Gallery/>
    </Format>
    </>
  )
}
