import axios from 'axios'


export const selectPiece = (piece) => {
  return dispatch => {
    dispatch({
      type: "SELECT_PIECE",
      payload: piece
    })
  }
}

export const setCurrentlySelected = (currentlySelectedPiece) =>{
  return dispatch => {
    dispatch({
      type: 'SELECTED_PIECE',
      payload: currentlySelectedPiece
    })
  }
}

//this.actions.unoccupyPiece(this.props.store.currentlySelectedPiece);

export const removePieceFromCurrentPlayer = (playerPiecesOccupied, currentPlayer, currentlySelectedPiece) =>{

  let newPieceArr = playerPiecesOccupied.filter(piece => piece !== currentlySelectedPiece)

  console.log('yeeett', newPieceArr, currentlySelectedPiece)
  return dispatch => {
    dispatch({
      type: 'REMOVE_PIECE_FROM_CURRENT_PLAYER_ARRAY',
      payload: {newPieceArr, currentPlayer}
    })
  }
}

export const addNewPieceToCurrentplayer = (position, currentPlayer) => {

  return dispatch => {
    dispatch({
      type: 'ADD_NEW_PIECE',
      payload: {currentPlayer, position}
    })
  }
}

export const toggleCurrentPlayer = (currentPlayer) => {
  return dispatch => {
    dispatch({
      type: "TOGGLE_PLAYER",
      payload: currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne'
    })
  }
}

// export const fetchLeaderboard = () => {
//   return (dispatch) => {
//     axios.get('localhost:8000/api')
//     .then(res => dispatch({
//       type: 'FETCH_LEADERBOARD'
//       paylaod: res.data
//     })
//     .catch(err => dispatch({
//       type: 'FETCH_FAILED'
//       payload: err
//     }))
//   }
// }


export const fetchLeaderboard = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000/api')
    .then(res => dispatch({
      type: "FETCH_LEADERBOARD",
      payload: res.data
    }))
    .catch(err => dispatch({
      type: "FETCH_FAILED",
      payload: err
    }))
  }
}
