import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../styles/BoardStyles.css'

import * as gameActions from '../../redux/actions';

class GameSpace extends Component {
  isThisPositionOccupied = () => [...this.props.store.gameTracker.piecesOccupied.playerOne, ...this.props.store.gameTracker.piecesOccupied.playerTwo]
      .includes(this.props.positionInfo.position);

  isProvidedPositionOccupied = providedPosition => [...this.props.store.gameTracker.piecesOccupied.playerOne, ...this.props.store.gameTracker.piecesOccupied.playerTwo]
      .includes(providedPosition);

  positionIsOccupiedBy = () => this.props.store.gameTracker.piecesOccupied.playerOne.includes(this.props.positionInfo.position)
      ? 'playerOne' : 'playerTwo';

  isPositionOccupiedByCurrentPlayer = position => this.props.store.gameTracker.piecesOccupied[this.props.store.gameTracker.currentPlayer]
      .includes(position);

  //start of game
  assessOccupySpace() {
    if(this.props.store.gameTracker.currentlySelectedPiece) {
      this.props.positionInfo.connectedTo.includes(this.props.store.gameTracker.currentlySelectedPiece)
          && this.props.store.gameTracker.piecesOccupied[this.props.store.gameTracker.currentPlayer]
              .includes(this.props.store.gameTracker.currentlySelectedPiece)
          && !this.isThisPositionOccupied()
          ? this.movePiece() : this.denyMovePiece();
    } else {
      if(this.isThisPositionOccupied()) {
        // set the currentlySelected piece be this piece
        this.props.actions.setCurrentlySelected(this.props.positionInfo.position)
      } else {
        this.props.store.gameTracker.piecesOccupied[this.props.store.gameTracker.currentPlayer].length < 3 ?
            this.placePiece() : this.denyMovePiece();
      }
    }
  }


  movePiece() {
    // take the piece out of the array of the currentPlayer occupied pieces
    this.props.actions.removePieceFromCurrentPlayer(
      this.props.store.gameTracker.piecesOccupied[this.props.store.gameTracker.currentPlayer],
      this.props.store.gameTracker.currentPlayer,
      this.props.store.gameTracker.currentlySelectedPiece
    );
    // add this piece to the array of the currentPlayer occupied pieces
    this.props.actions.addNewPieceToCurrentplayer(this.props.positionInfo.position, this.props.store.gameTracker.currentPlayer);

    this.evaluateWinningConditions();
  }

  denyMovePiece() {
    //shake screen maybe
    console.log("move denied");
    this.props.actions.setCurrentlySelected(null);
  }

  placePiece() {
    this.props.actions.addNewPieceToCurrentplayer(this.props.positionInfo.position, this.props.store.gameTracker.currentPlayer);
    this.evaluateWinningConditions();
  }

  changeTurns() {
    //change the player to either 'playerOne' or 'playerTwo'
    this.props.actions.toggleCurrentPlayer(this.props.store.gameTracker.currentPlayer);
    this.props.actions.setCurrentlySelected(null);
  }

  evaluateWinningConditions() {
    for(let condition of this.props.positionInfo.winningConnections) {
      if(this.isPositionOccupiedByCurrentPlayer(condition[0]) && this.isPositionOccupiedByCurrentPlayer(condition[1])) {

        // confeddi on the screen maybe
          //this.props.actions.setWinner()
          console.log(this.props.store.gameTracker.currentPlayer,'has won the game');
        return;
      }
    }
    console.log("YOOO CHEKED FOR WINNER");
    this.changeTurns();
  }//end of evaluateWinningConditions()



  render() {


    return (
      <div>

        <div
            className={`spacing grid-item lvl2 ${this.props.positionInfo.position} ${this.isThisPositionOccupied() ? 'occupied-by-' + this.positionIsOccupiedBy() : ''}`}
            onClick={() => this.assessOccupySpace()}>


        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state.boardState,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(gameActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameSpace);
