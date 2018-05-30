import React from 'react'
import FITBIT_API_KEY from '../env';

class HeartRate extends React.Component {
  state = {
    data: []
  }

  componentDidMount(){
    fetch('https://api.fitbit.com/1/user/-/activities/heart/date/today/1m.json',{
  method: 'GET',
  headers: {
    "Authorization": `Bearer ${FITBIT_API_KEY}`
  }
}).then(res =>  res.json())
.then(data => this.setState({data : data['activities-heart'][30]['value']['restingHeartRate'] }))

}

  render(){

    return(
      <div className="col s12 m4" id='comp'>
          <div className="icon-block">
            <h4 id='tracker'>Resting Heart Rate</h4>
          <div className="row">
      <form className="col s12">

        <div className="row">
          <div className="input-field col s12">
            <span id='tracker'><h1>{this.state.data}</h1> <h6 id='bpm'>BPM</h6></span>
          </div>
        </div>
      </form>


            </div>
          </div>
        </div>
      )
  }
}

export default HeartRate
