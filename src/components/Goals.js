import React from 'react'

const Goals = (props) => {

  return (

  <div id='habitinfo'>
  <form>
  <input type="checkbox" /> {props.goal}
  </form>
    </div>

  )
}

export default Goals;
