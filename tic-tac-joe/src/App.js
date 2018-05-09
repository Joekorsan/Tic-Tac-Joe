import React, { Component } from 'react';
import './App.css';
import GameBoard from './Components/GamePage/GameBoard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WinnerPage from './Components/GamePage/WinnerPage'
import Splash from './Components/Intro/Splash'
import HowToPlay from './Components/Intro/HowToPlay'
import Leaderboard from './Components/Leaderboard/Leaderboard'
import PlayerNameForm from './Components/PlayerNameForm/PlayerNameForm'


class App extends Component {
  routeMe = (path) => this.props.history.push(`/${path}`)
  render() {

    return (
      <Router>


        <div className="App">
          <div className="float-left">
          <Link className="lvl3" to="/gameboard"> gameboard </Link>
          <br/>
          <br/>
          <br/>
          <Link className="lvl3" to="/howtoplay"> how to play </Link>
          <br/>
          <br/>
          <br/>
          <Link className="lvl3" to="/leaderboard"> leaderboard </Link>
        </div>

          <Route exact path="/" component={Splash} />
          <Route exact path="/gameboard" component={GameBoard} />
          <Route exact path="/winnerpage" component={WinnerPage} />
          <Route exact path="/howtoplay" component={HowToPlay} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route exact path="/playernameform" component={PlayerNameForm} />





        </div>
      </Router>
    );
  }
}

export default App;
