import React from 'react'

const Navbtns = (props) => {
  return (
    <div className='navbtn'>
        {props.buttonName}
        {props.icon}
        {props.count}
    </div>
  )
}

export default Navbtns
