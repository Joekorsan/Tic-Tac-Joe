

let initialState = {
    playerTracker: {
      playerOne: {
        name: 'joe',

      },
      playerTwo: {

        name: 'juju'
      }
    },
    gameTracker: {
      winStreak: 0,
      turnsPlayed: 0,
      piecesOccupied: {
        playerOne: [],
        playerTwo: [],
      },
      playerNames: {
        playerOne: null,
        playerTwo: null,
      },
      tooglePieceSelected: false,
      hasWon: false,
      winningPlayer: null,
      currentPlayer: Math.floor(Math.random() * 2) === 0 ? 'playerOne' : 'playerTwo',
      currentlySelectedPiece: null
    },
    leaderboard:[]
  }



export default (state=initialState, action) => {
  switch (action.type) {
    case "SELECTED_PIECE":
      return {
        ...state,
        gameTracker: {
          ...state.gameTracker,
          currentlySelectedPiece: action.payload
        }
      };
    case "REMOVE_PIECE_FROM_CURRENT_PLAYER_ARRAY":
      const runIt = (function(){
        let { currentPlayer, newPieceArr } = action.payload
        let { piecesOccupied } = state.gameTracker

        piecesOccupied[currentPlayer] = newPieceArr

        return {
          piecesOccupied,
          currentPlayer,
          newPieceArr
        }
      }());
      console.log('ayyyeeeeeee', runIt)

      return {
        ...state,
        gameTracker: {
          ...state.gameTracker,
          piecesOccupied: runIt.piecesOccupied
        }
      };

    case "ADD_NEW_PIECE":
      let {position, currentPlayer} = action.payload
      let { piecesOccupied } = state.gameTracker
      console.log('shweet', piecesOccupied, currentPlayer, state.gameTracker.piecesOccupied, position)
      piecesOccupied[currentPlayer] = [...state.gameTracker.piecesOccupied[currentPlayer], position]

      return {
        ...state,
        gameTracker: {
          ...state.gameTracker,
          piecesOccupied
        }
      };
    case "TOGGLE_PLAYER":

      return {
        ...state,
        gameTracker:{
          ...state.gameTracker,
          currentPlayer: action.payload
        }
      };
    case 'FETCH_LEADERBOARD':
    console.log('this is the actions!!!!:',action.payload);
      return {
        ...state,
        leaderboard:[...action.payload]
      }
    default:
      return state;

  }
}
