import React from 'react'

const Footer = (props) => {
  return (
    <div className='foot-divs'>
      {props.sentence}{props.component}
    </div>
  )
}

export default Footer
