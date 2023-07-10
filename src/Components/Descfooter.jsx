import React from 'react'
import {AiOutlinePlus } from 'react-icons/ai'
const Descfooter = (props) => {
  return (
    <div className='desc-footer'>
      {props.price}
        <div className='desc-icons'>
            <AiOutlinePlus />
        </div>
    </div>
  )
}

export default Descfooter
