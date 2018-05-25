import React from 'react'
import Workouts from './Workouts'

class WorkoutLog extends React.Component{
  state = {
    workouts: {
      name:[],
      sets:[],
      reps:[],
      weight:[]
    }
  }

  handleWorkout = (e) => {
    this.setState({newWorkout: e.target.value})
  }

  handleSets = (e) => {
    this.setState({newSet: e.target.value})
  }

  handleReps = (e) => {
    this.setState({newRep: e.target.value})
  }

  handleWeight = (e) => {
    this.setState({newWeight: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({workouts: [...this.state.workouts, this.state.newWorkout],
      sets: [...this.state.sets, this.state.newSet],
      reps: [...this.state.reps, this.state.newRep],
      weight: [...this.state.weight, this.state.newWeight],
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
          <form>
            <input id="workout" type="text" className="validate" placeholder='Workout' onChange={this.handleWorkout}/>
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
