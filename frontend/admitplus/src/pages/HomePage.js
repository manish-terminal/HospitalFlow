import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
         <Navbar/>
  <HeroSection/>
    <Features/>
    <HowItWorks/>
    <CTASection/>
    <Footer/>
      
    </div>
  )
}

export default HomePage
