import React from 'react'

const Btn = (props) => {
  return (
    <div className={props.className}>
      {props.buttonName}
    </div>
  )
}

export default Btn
