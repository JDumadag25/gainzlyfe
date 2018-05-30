import React from 'react'
import Habits from './Habits'

class HabitTracker extends React.Component{
  state = {
    habits: [],
    streak: 0,
    newHabitForm: ''
  }



  handleChange = (e) => {
    this.setState({newHabitForm: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({habits: [...this.state.habits, this.state.newHabitForm]})
  }


  render() {
    const habits = this.state.habits.map((habit) => {
      return <Habits habit={habit}/>
    })
    return (
      <div className="col s12 m4" id='comp'>
        <div className="icon-block">
          <h4 id='tracker'>Habit Tracker</h4>
        <div className="row">
    <form className="col s12">

      <div className="row">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit}>
            <input id="habit" type="text" className="validate" placeholder='Habit' onChange={this.handleChange}/>
            <button className="btn waves-effect waves-light" id="habit" type="submit" name="action">Submit</button>
          </form>
        </div>
      </div>

    </form>

    {habits}

    </div>
        </div>
      </div>
    )

  }
}

export default HabitTracker
