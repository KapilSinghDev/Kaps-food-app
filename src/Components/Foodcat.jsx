import React from 'react'

const Foodcat = (props) => {
  return (
    <div className='food-cat'>
      {props.title}
      <div className={props.className}>  
        <img src={props.url} alt={''}/>
        <div className='food-cat-one'>
          {props.offer}
        </div>
      </div>
    </div>
  )
}

export default Foodcat
