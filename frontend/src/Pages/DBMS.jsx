import React, { useState, useRef, useEffect } from 'react';
import '../CSS/McqPage.css';
import { data } from '../assets/datadbms';

const DBMS = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(null); // Initialize as null
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  let [result,setResult]=useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_array = [option1, option2, option3, option4];

  useEffect(() => {
    setQuestion(data[index]); // Set initial question when component mounts
  }, [index]); // Re-run effect when index changes

  const checkAns = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add('correct');
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add('wrong');
        setLock(true);
        option_array[question.ans - 1].current.classList.add('correct');
      }
    }
  };

  const next = () => {
    if (lock) {
      if(index===data.length-1){
        setResult(true);
        return 0;

      }

      setIndex(prevIndex => prevIndex + 1);
      setQuestion(data[index + 1]); // Set next question
      setLock(false);
      option_array.forEach(option => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
      });
    }
  };

  if (!question) return null; // Render nothing if question is not yet initialized

  const reset=()=>{
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }
  return (
    <div className='container-mcq'>
      <h1>QUIZ</h1>
      <hr />
      {result?<></>:<><h2>
        {index + 1}.{question.question}
      </h2>
      <ul>
        <li ref={option1} onClick={e => checkAns(e, 1)}>
          {question.option1}
        </li>
        <li ref={option2} onClick={e => checkAns(e, 2)}>
          {question.option2}
        </li>
        <li ref={option3} onClick={e => checkAns(e, 3)}>
          {question.option3}
        </li>
        <li ref={option4} onClick={e => checkAns(e, 4)}>
          {question.option4}
        </li>
      </ul>
      <button onClick={next}>Next</button>
      <div className='index'>
        {index + 1} of {data.length} questions
      </div></>}

      {result?<>
      <h2>You Scored {score} out of {data.length}</h2>
      <button onClick={reset}>Reset</button>
      </>:<></>
      }
      </div>
    
  );
};

export default DBMS;

