import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams(); // Assumes you are using React Router and the job ID is passed as a URL parameter
  const [job, setJob] = useState(null); // Initialize state as null
  
  useEffect(() => {
    fetch(`/api/jobs/${id}`) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Check if data is an array and set the state to the first item if it is
        if (Array.isArray(data) && data.length > 0) {
          setJob(data[0]);
        } else {
          setJob(data);
        }
      })
      .catch(error => console.error('Error fetching job details:', error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const handleClick = (company_Id) => {
    
    console.log('Add to Cart clicked for image with id:', company_Id);
    axios.post('http://localhost:3001/applications', { company_Id})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error('Error adding item to cart', error));
  };



  return (
    <div className='job-details'>
      <h1>{job.designation}</h1>
      
      <h2>{job.companyName}</h2>
      <p>Deadline: {job.applyBefore}</p>
      <p>Location: {job.location}</p>
      <p>Package: {job.package}</p>
      <div className='description'>
        <h3>Description:</h3>
        <p>{job.description}</p>
      </div>
      {job.responsibilities && (
        <div className='responsibilities'>
          <h3>Responsibilities:</h3>
          <ul>
            {job.responsibilities.split('\n').map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      )}
      {job.stream && (
        <div className='key-skills'>
          <h3>Key Skills:</h3>
          <div className='skills'>
            {job.stream.split(',').map((skill, index) => (
              <span key={index} className='skill-badge'>{skill}</span>
            ))}
          </div>
        </div>
      )}
      <button  onClick={() => handleClick(job.id)}className='apply-btn'>Apply</button>
    </div>
  );
};

export default JobDetails;
