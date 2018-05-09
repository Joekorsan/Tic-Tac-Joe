import React from 'react'
import { Link } from 'react-router-dom'

const HowToPlay = (props) => {



  return (
    <div className="block">

      <b><span className="lvl4"> How TO PLAY!!! </span></b>
      <br/><br/><br/>



      <span className="">
        Welcome to TIC-TAC-JOE this Game is played
        like tic-tac-toe but with a joe twist. Each player starts by placing a play piece
        on the board. After each player has occupied the board with 3 pieces each. If there is no clear
        winner after the pieces have been placed then each playe has the chance to move one piece
        at a time to try and get three in a row! BUT HERES THE CATCH! players can only move one
        space from their current piece position! GOOD LUCK AND MAY THE BEST STRATEGY WIN!

      </span>
      <br/>
      <br/>
      <br/>
      <br/>

      <Link className="lvl3 float-right" to='/gameboard' > Play!!!!>>> </Link>

    </div>
  )
}


export default HowToPlay;
