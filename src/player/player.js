import Gameboard from "../gameboard/gameboard";
import randomPlaceBoat from "../gameFlow/randomPlaceBoat";

// Type should be 'real' or 'computer'
class Player {
    constructor(type) {
        this.type = type;
        this.gameboard = new Gameboard();
    }

    DisplayBoard() {
        // Check player gameboard is not empty
        if (!this.gameboard) {
            return false;
        }
        // Take player and get board and type
        const playerType = this.type;
        const playerBoard = this.gameboard.board;

        // Iterate through board
        for (let i = 0; i < playerBoard.length; i++) {
            for (let j = 0; j < playerBoard[i].length; j++) {
                if (playerBoard[i][j] !== null) {
                    document.getElementById(
                        `${playerType}-${i}-${j}`
                    ).style.backgroundColor = "grey";
                }
            }
        }
        return true;
    }

    reset() {
        this.gameboard = new Gameboard();
    }

    randomize() {
        randomPlaceBoat(this);
    }
}

export default Player;