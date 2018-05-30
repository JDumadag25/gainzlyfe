import React from 'react'

class Steps extends React.Component {
  state = {
    steps: [],
    calories: []
  }

  refreshId = null;

getData = () => {
  fetch('https://api.fitbit.com/1/user/-/activities/date/today.json',{
method: 'GET',
headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzR0pKSEciLCJhdWQiOiIyMkNTU0YiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTI3NzIwNTE0LCJpYXQiOjE1Mjc2OTE3MTR9.Oyg4VAF0dKsH6hSDEv-_m1nWtaUu8zt9LaaxU8vj7AM"
}
}).then(res =>  res.json())
.then(data => this.setState({steps: data['summary']['steps'], calories: data['summary']['caloriesOut']}))

}

 refresh = () => {
  this.refreshId = setInterval(() => {
    console.log("hello");
    this.getData()
  }, 5000);

}
  componentDidMount(){
    this.getData()
    // this.refresh()
  }

  componentDidUnmount() {
    if (this.refreshId) {
      this.refreshId.clearInterval();
    }
  }

  render(){

    return(
      <div className="col s12 m4" id='comp'>
          <div className="icon-block">
            <h4 id='tracker' className='cals'>Steps & Calories</h4>
          <div className="row">
      <form className="col s12">

        <div className="row">
          <div className="input-field col s12">
            <br></br><br></br>
            <span id='tracker'><h2>{this.state.steps}</h2> <h6>Steps</h6></span>
            <span id='tracker'><h2>{this.state.calories}</h2> <h6>Calories</h6></span>
          </div>
        </div>
      </form>


            </div>
          </div>
        </div>
      )
  }
}

export default Steps
