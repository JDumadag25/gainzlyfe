import React from 'react'

class Workouts extends React.Component{

  state = {

  }

  handleClick = () =>{
    let points = this.state.streak
    this.setState({streak: points + 1})
  }

  render(){
    return(
      <div className='col s12 m12'>
        <ul>
          <div className='row'>
            <li>
              <div className='m12'></div>
              <div className='m12'></div>
              <div className='m12'></div>
              <div className='m12'></div>
            </li>
          </div>
        </ul>
      </div>
    )
  }
}

export default Workouts
