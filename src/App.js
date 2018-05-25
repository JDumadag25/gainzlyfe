import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HabitTracker from './components/HabitTracker'
import GoalTracker from './components/GoalTracker'
import Qod from './components/Qod'


class App extends Component {
  render() {
    return (
      <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">GAINZ</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Navbar Link</a></li>
            </ul>
          </div>
        </nav>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <br></br><br></br>
            <h1 className="header center orange-text">Do you even lift (state) bruh?!</h1>
            <div className="row center">
              <Qod />

            </div>

            <br></br><br></br>

          </div>
        </div>


        <div className="container">
          <div className="section">


            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, beatae! Et est veniam perspiciatis, voluptas voluptate obcaecati expedita, in minus optio voluptatibus laborum neque voluptatem earum quia distinctio doloribus animi?
                </div>
              </div>

              <GoalTracker />

            <HabitTracker />

            </div>

          </div>
          <br></br><br></br>
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of brogrammers. #JAFEELZ #SlackDatAzz</p>


              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                  <li><a className="white-text" href="#!">Link 3</a></li>
                  <li><a className="white-text" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
</div>



    );
  }
}

export default App;
