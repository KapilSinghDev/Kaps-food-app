import React from 'react'

const Usernav = (props) => {
  return (
    <div className='nav-user'>
        <img src={props.url} alt=''/>
        {props.username}
    </div>
  )
}

export default Usernav
