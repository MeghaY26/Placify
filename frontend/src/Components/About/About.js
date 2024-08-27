import React from 'react'
import './About.css'
import about_img from '../../img/about.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT US</h3>
        <h2>Welcome to Placify</h2>
        <p>At Placify(Placement Preparation Portal) , we are dedicated to empowering students and professionals on their journey towards successful placements. Our platform offers a comprehensive suite of resources, including interactive quizzes, expert tutorials, and insightful guides, all designed to equip you with the skills and knowledge needed to excel in interviews and assessments.</p>
        <p>Whether you're a fresh graduate embarking on your career or a seasoned professional seeking new opportunities, Placify(Placement Preparation Portal) is your trusted companion in navigating the competitive landscape of recruitment. Join our community today and take the next step towards realizing your career aspirations.</p>
      </div>
    </div>
  )
}

export default About
