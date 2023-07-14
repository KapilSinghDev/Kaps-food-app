import React from 'react'
import  Alert  from '@mui/material/Alert'
function Alertbox(props) {
  return (
    <div>
        <Alert className={props.className} severity="error">{props.statement}</Alert>
    </div>
  )
}

export default Alertbox
