import React from 'react'
import Habits from './Habits'

class HabitTracker extends React.Component{
  state = {
    habits: []
  }
  render() {
    return (
      <div className="col s12 m4">
        <div className="icon-block">
          <h4>Habit Tracker</h4>
        <div className="row">
    <form className="col s12">

      <div className="row">
        <div className="input-field col s12">
          <input id="habit" type="habit" className="validate" placeholder='Habit'/>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </div>
      </div>

    </form>

    <Habits/>

    </div>
        </div>
      </div>
    )

  }
}

export default HabitTracker
