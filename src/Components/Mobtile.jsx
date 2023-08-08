import React from 'react'

const Mobtile = (props) => {
  return (
    <div className='mob-tile'>
        <img className='tile-icons' src={props.url} alt={props.alt}/>
        
    </div>
  )
}

export default Mobtile
