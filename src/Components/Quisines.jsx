import React from 'react'

const Quisines = (props) => {
  return (
    <div className='mob-cards-res'>
        <div className='mob-res-img'>
            <img className='mob-res-img-one' src={props.url} />
        </div>
        <h2>{props.resName}---${props.price}</h2>
    </div>
  )
}

export default Quisines
