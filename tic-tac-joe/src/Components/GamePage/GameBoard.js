import React from 'react'
import {gameRef} from '../../gameUtilities/gameRef'
import GameSpace from './GameSpace'

const GameBoard = () => {



  let { renderSpaces } = gameRef
  let boardPieces = renderSpaces.map( positionInfo => <GameSpace key={positionInfo.position} positionInfo={positionInfo}/>);

  return (
    <div>
      <div>
        <span> TIC-TAC-JOE!!!! </span>
      </div>

      <div className="grid-container ">

        {boardPieces}

      </div>
    </div>
  )
}



export default GameBoard;
