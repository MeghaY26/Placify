import React from 'react'
import '../Title/Title.css'
const Title = ({subTitle,title}) => {
  return (
    <div className='title'>
        <h2>{subTitle}</h2>
        <h3>{title}</h3>
    </div>
  )
}

export default Title
