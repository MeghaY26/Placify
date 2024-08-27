import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Practice from '../Components/Practice/Practice'
import Title from '../Components/Title/Title'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'

const homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container-home'>
        <Title subTitle='Practice' title='What We Offer'/>
        <Practice/>
        <About/>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact/>
      </div>
    </div>
  )
}

export default homepage
