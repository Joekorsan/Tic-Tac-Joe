import React from 'react'
import { connect } from 'react-redux'

const Leaderboard = (props) => {

  console.log('gameboard state',props.gameBoardState.leaderboard);
  let leaderboard = props.gameBoardState.leaderboard ? props.gameBoardState.leaderboard.map((playerRank, indx) => <div><li key={indx}>{playerRank.userName}, Streak: {playerRank.streak} </li><br/></div>)
      : ''

  return (

    <div>
      <div>-Leaderboard-</div>
        <div className='float-right'>
          <ol>
            { leaderboard }
          </ol>
        </div>

    </div>
  )
}

const addStatetoProps = (state) => {
  //console.log('in mstp',state);
  return {gameBoardState:state.boardState}
}

export default connect(addStatetoProps)(Leaderboard);
