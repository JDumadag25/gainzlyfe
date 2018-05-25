import React from 'react'

class Habits extends React.Component{

  state = {
    streak: 0
  }

  handleClick = () =>{
    let points = this.state.streak
    this.setState({streak: points + 1})
  }

  render(){
    return(
      <div className='col s12 m12'>
        <ul>
          <div className='row' onClick={this.handleClick}>
            <li>
              <div className='m12'>Habit: {this.props.habit}</div>
              <div className='m12'>Streak: {this.state.streak}</div>
            </li>
          </div>
        </ul>
      </div>
    )
  }
}


// const Habits = (props) => {
//
// console.log(props);
//   return (
//     <div className='col s12 m4'>
//       <ul>
//         <div className='row' onClick={props.handleClick}>
//           <div className='m12'>Habit: {props.habits}</div>
//           <div className='m12'>Streak:</div>
//         </div>
//       </ul>
//     </div>
//   )
// }

export default Habits
