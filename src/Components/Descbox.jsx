import React from 'react'
import Descfooter from './Descfooter'

const Descbox = (props) => {
  return (
    <div className='description-box'>
        <div className='desc-upper'>
            <img className='item-img' src={props.url} alt={''}/>
        </div>
        <div className='desc-lower'>
            {props.description}
            <Descfooter price={props.amt}/>
        </div>
    </div>
  )
}

export default Descbox
