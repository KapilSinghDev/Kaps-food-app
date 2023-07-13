import React from 'react'

function Mobinoutcomp(props) {
  return (
    <div className='mob-in-comp'>
        <h2>{props.heading}</h2>
        <input className='mob-text-box' 
            type='text'
            placeholder={props.placeholder}
        />
    </div>
  )
}

export default Mobinoutcomp
