import React from 'react'

const Total = ({ parts }) => {
    const sum = parts.reduce((total, part) => total + part.exercises, 0);
    return (
    <div>
       <p>Number of exercises: {sum}</p>
    </div>
  )
}

export default Total