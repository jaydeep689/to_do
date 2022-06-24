import React from 'react'
import moment from 'moment';
export default function Title(props) {
 

  return (
    <div id="title">
      {props.title}
      <br></br>
      <div style={{fontSize:"0.9rem",color:"grey"}}>{moment().format("ddd,MMM D")} </div>  
    </div>
  )
}
