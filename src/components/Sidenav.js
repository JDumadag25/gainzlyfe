import React from 'react';
import Calorie from './Calorie'
const Sidenav = (props) => {
  console.log(props)
  return (

    <ul id="slide-out" className={props.isOpen ? "sidenav left" : "sidenav"}>
<li><a className="subheader">Total Calorie Count: <span>{props.calCount}</span></a></li>

        {props.showCals.map((calorie) => {
          return <Calorie calorie={calorie} />
        })}
     </ul>

  )
}

export default Sidenav;
