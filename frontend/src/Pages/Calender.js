/*import MotionHoc from "./MotionHoc";

import React from 'react'
import '../Components/Practice/Practice.css'
import { Link } from 'react-router-dom';
import practice_1 from '../img/program-icon-1.png'
import practice_2 from '../img/program-icon-2.png'
import practice_3 from '../img/program-icon-3.png'


const Practice = () => {
  return (
      <div className='practices'>
        <h1><center>Jobs for you</center></h1><br/>
      <div className='box-container-mcq'>
        <div className='box-mcq'>
          
          <img src={practice_1} alt=""/>
          <h3>Sofware Dev Intern</h3>
          <br/>
          <h3>Company 1</h3>
          <h4>Location : Bengaluru</h4>
          <h4>Package : 25 LPA</h4>
          <h4>Key Skills : Problem-Solving</h4>
          <h4>Deadline : 11/06/2024</h4>
          <Link to="/apply" className='practice-btn'>Apply</Link>
        </div>

        <div className='box-mcq'>
          <img src={practice_2} alt=""/>
          <h3>Sofware Dev Intern</h3>
          <br/>
          <h3>Company 1</h3>
          <h4>Location : Bengaluru</h4>
          <h4>Package : 25 LPA</h4>
          <h4>Key Skills : Problem-Solving</h4>
          <h4>Deadline : 11/06/2024</h4>
          <Link to="/apply" className='practice-btn'>Apply</Link>
        </div>

        


      </div>
    </div>
  )
}


const Calender = MotionHoc(Practice);

export default Calender;*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MotionHoc from "./MotionHoc";
import '../Components/Practice/Practice.css';

const Practice = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/jobs') // replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className='practices'>
      <h1><center>Jobs for you</center></h1><br/>
      <div className='box-container-mcq'>
        {jobs.map((job, index) => (
          <div className='box-mcq' key={index}>
            {/* You can replace the src attribute with a default image if the backend doesn't provide it */}
            
            <h3>{job.designation}</h3>
            <br/>
            <h3>{job.companyName}</h3>
            <h4>Location : {job.location}</h4>
            <h4>Package : {job.package}</h4>
            <h4>Key Skills : {job.stream}</h4>
            <h4>Deadline : {new Date(job.applyBefore).toLocaleDateString()}</h4>
            
            <Link to={`/job/${job.id}`} className='practice-btn'>Apply</Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}

const Calender = MotionHoc(Practice);

export default Calender;

