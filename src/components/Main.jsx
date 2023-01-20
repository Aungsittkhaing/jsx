import React from 'react'

const Main = (props) => {
  console.log(props);
  return (
    <div className='MainContainer'>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default Main