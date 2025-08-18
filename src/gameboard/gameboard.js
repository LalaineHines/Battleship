function createGameboard() {
    return Array(10).fill().map(() => Array(10).fill(null));
}

// takes a 2-d array
function isInBounds(array) {
    return array[0] >= 0 && array[0] <= 10 && array[1] >= 0 && array[1] <= 10;
}

class Gameboard {
    constructor() {
        this.board = createGameboard();
        this.missedShots = new Array();
    }

    placeBoat(boat, [row, col], axis) {
        if (boat === undefined || axis === undefined) {
            return false;
        }
        if (!Array.isArray([row, col])) {
            return false;
        }
        if (!isInBounds([row, col])) {
            return false;
        }
        // divide between x and y axis
        const length = boat.length;
        if (axis === "x") {
            if (!isInBounds([row, col + length])) {
                return false;
            }

        // check to see if the spaces are free
        for (let i = 0; i < length; i++) {
            if (this.board[row][col + i] !== null) {
                return false;
            }
        }
        // fill spaces for boat if empty
        for (let i = 0; i < length; i++) {
            this.board[row][col + i] = boat;
        }
        return true;
    } else if (axis === "y") {
        if (!isInBounds([row + length, col])) {
            return false;
        }

        // check to see if spaces are free
        for (let i = 0; i < length; i++) {
            if (this.board[row + i][col] !== null) {
                return false;
            }
        }
        // fill spaces for boat if empty
        for (let i = 0; i < length; i++) {
            this.board[row + i][col] = boat;
        }
        return true;
    } else {
        return false;
        }
    }

    // receive attack
    receiveAttack(index) {
        if (!index || !Array.isArray(index)) {
            return null;
        }
        if (!isInBounds(index)) {
            return null;
        }
        let co_ordinates = this.board[index[0]][index[1]];
        if (!co_ordinates) {
            this.missedShots.push(index);
            this.board[index[0]][index[1]] = "MISS";
            return false;
        } else if (typeof co_ordinates === " object" && co_ordinates !== null) {
            co_ordinates.hit();
            return true;
        } else {
            return false;
        }
    }

    // check to see if all boats ar sunk
    isBoatSunk() {
        for (let row of this.board) {
            for (let col of row) {
                if (typeof col === "object" && col !== null) {
                    col.isSunk();
                    if (col.Sunk === false) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}

export default Gameboard;