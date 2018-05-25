import React from 'react'
import Goals from './Goals'
class GoalTracker extends React.Component{
  state = {
    goals:[],
    goal: ""
  }



handleChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  });
}

addGoal = (event) => {
  event.preventDefault();
  this.setState({
     goals: [...this.state.goals, this.state.goal],
     goal: ""
  });
}

  render() {
    return (
      <div className="col s12 m4">
        <div className="icon-block">
          <h4>Goal Tracker</h4>
        <div className="row">
    <form onSubmit={this.addGoal} className="col s12">

      <div className="row">
        <div className="input-field col s12">
          <input onChange={this.handleChange} id="goal" type="habit" className="validate" placeholder='Goal'/>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </div>
      </div>

    </form>



    </div>
    <div className="row">
      {this.state.goals.map((goal) => {
        return <Goals goal={goal} />
      })}
    </div>
        </div>
      </div>
    )

  }
}

export default GoalTracker;
