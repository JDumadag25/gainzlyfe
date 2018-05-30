import React from 'react'
import FITBIT_API_KEY from '../env';

class Sleep extends React.Component {

  state = {
    duration: [],
    summary:[],
  }

  componentDidMount(){
    fetch('https://api.fitbit.com/1.2/user/-/sleep/date/today.json',{
  method: 'GET',
  headers: {
    "Authorization": `Bearer ${FITBIT_API_KEY}`
  }
}).then(res =>  res.json())
.then(data => this.setState({duration: data['sleep'][0]['minutesAsleep'], summary: data['summary']['stages'] }))

}

asleep = () => {
  let min = this.state.duration
  let h = Math.floor(min / 60);
  let m = min % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}`;
}

deep = () => {
  let min = this.state.summary.deep
  let h = Math.floor(min / 60);
  let m = min % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}`;
}

light = () => {
  let min = this.state.summary.light
  let h = Math.floor(min / 60);
  let m = min % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}`;
}

rem = () => {
  let min = this.state.summary.rem
  let h = Math.floor(min / 60);
  let m = min % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}`;
}



render(){

    return(
      <div className="col s12 m4" id='comp'>
          <div className="icon-block">
            <h4 id='tracker' className='sleep'>Sleep Info</h4>
          <div className="row">
      <form className="col s12">

        <div className="row">
          <div className="input-field col s12" id='timeinfo'>
            <p>Total: {this.asleep()} Hours </p>
            <p>Deep: {this.deep()} Hours </p>
            <p>Light: {this.light()} Hours </p>
            <p>REM: {this.rem()} Hours </p>

          </div>
        </div>
      </form>


            </div>
          </div>
        </div>
      )
  }
}

export default Sleep
