// import { lightBlue } from '@mui/material/colors'
import React from 'react'
// import { GiTrafficLightsOrange } from 'react-icons/gi'

const Mobilecards = (props) => {
  return (
    <div className={props.className} >
        <img className='mob-card-img' src={props.url} alt={props.alt}/>
        
    </div>
  )
}

export default Mobilecards
