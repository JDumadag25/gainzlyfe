import React from 'react'

class Workouts extends React.Component{

  state = {
    sets: [],
    reps: [],
    weight: []
  }


  render(){
    return(
      <div className='col s12 m12'>
        <ul>
          <div className='row'>
            <li>
              <div className='m12'>Workout: {this.props.name}</div>
              <div className='m12'>Sets: {this.props.sets}</div>
              <div className='m12'>Reps: {this.props.reps}</div>
              <div className='m12'>Weight: {this.props.weight}</div>
            </li>
          </div>
        </ul>
      </div>
    )
  }
}

export default Workouts
