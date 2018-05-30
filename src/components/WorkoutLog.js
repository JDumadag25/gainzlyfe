import React from 'react'
import Workouts from './Workouts'

class WorkoutLog extends React.Component{
  state = {
    workouts: [],
      nameForm:[],
      setsForm:[],
      repsForm:[],
      weightForm:[]
    }




  handleName = (e) => {
    this.setState({nameForm: e.target.value})
  }

  handleSets = (e) => {
    this.setState({setForm: e.target.value})
  }

  handleReps = (e) => {
    this.setState({repForm: e.target.value})
  }

  handleWeight = (e) => {
    this.setState({weightForm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({workouts: {...this.state.workouts, name: this.state.nameForm}
    })
  }




  render() {
    return (
      <div className="col s12 m4">
        <div className="icon-block">
          <h4>Workout Log</h4>
        <div className="row">
    <form className="col s12">

      <div className="row">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit}>
            <input id="workout" type="text" className="validate" placeholder='Workout' onChange={this.handleName}/>
            <input id="sets" type="number" className="validate" placeholder='Sets' onChange={this.handleSets}/>
            <input id="reps" type="number" className="validate" placeholder='Reps' onChange={this.handleReps}/>
            <input id="weight" type="number" className="validate" placeholder='Weight' onChange={this.handleWeight}/>
            <button className="btn waves-effect waves-light" id="habit" type="submit" name="action">Submit</button>
          </form>
        </div>
      </div>
    </form>


          </div>
        </div>
      </div>
    )

  }
}

export default WorkoutLog
