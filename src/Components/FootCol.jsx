import React from 'react'

function FootCol(props) {
  return (
    <div className='foot-col-list'>
        <ul className='foot-col-one'>
            <li>{props.line1}</li>
            <li>{props.line2}</li>
            <li>{props.line3}</li>
            <li>{props.line4}</li>
        </ul>
    </div>
  )
}

export default FootCol
