import MotionHoc from "./MotionHoc";

import React from 'react'
import '../Components/Practice/Practice.css'
import { Link } from 'react-router-dom';
import practice_1 from '../img/program-icon-1.png'
import practice_2 from '../img/program-icon-2.png'
import practice_3 from '../img/program-icon-3.png'


const Practice = () => {
  return (
      <div className='practices'>
      <div className='box-container-mcq'>
        <div className='box-mcq'>
          <img src={practice_1} alt=""/>
          <h3>CN-MCQ</h3>
          <br/>
          <p>Test your knowledge with multiple-choice questions and expand your understanding through interactive quizzes.</p>
          <Link to="/mcqpage" className='practice-btn'>Take Test</Link>
        </div>

        <div className='box-mcq'>
          <img src={practice_2} alt=""/>
          <h3>DBMS-MCQ</h3>
          <br/>
          <p>Test your knowledge with multiple-choice questions and expand your understanding through interactive quizzes.</p>
          <Link to="/dbms" className='practice-btn'>Take Test</Link>
        </div>

        <div className='box-mcq'>
          <img src={practice_2} alt=""/>
          <h3>OS-MCQ</h3>
          <br/>
          <p>Test your knowledge with multiple-choice questions and expand your understanding through interactive quizzes.</p>
          <Link to="/os" className='practice-btn'>Take Test</Link>
        </div>


        <div className='box-mcq'>
          <img src={practice_2} alt=""/>
          <h3>Aptitude</h3>
          <br/>
          <p>Test your knowledge with multiple-choice questions and expand your understanding through interactive quizzes.</p>
          <Link to="/apti" className='practice-btn'>Take Test</Link>
        </div>

        

        <div className='box-mcq'>
          <img src={practice_2} alt=""/>
          <h3>DSA</h3>
          <br/>
          <p> Dive into the world of Data Structures and Algorithms, sharpen your problem-solving skills, and master the art of efficient coding</p>
          <Link to="/otherpage" className='practice-btn'>Explore more</Link>
        </div>

        <div className='box-mcq'>
          <img src={practice_3} alt=""/>
          <h3>RESOURCES</h3>
          <br/>
          <p>Access a wealth of study materials, tutorials, and guides to enhance your learning journey and broaden your knowledge base</p>
          <Link to="/resources" className='practice-btn'>Explore more</Link>
        </div>


      </div>
    </div>
  )
}





const Team = MotionHoc(Practice);

export default Team;
