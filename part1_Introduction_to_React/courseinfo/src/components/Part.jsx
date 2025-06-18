import React from 'react'

const Part = ({ part, exercises }) => {
  return (
     <div>
      <p>{part} has {exercises} exercises</p>
    </div>
  )
}

export default Part