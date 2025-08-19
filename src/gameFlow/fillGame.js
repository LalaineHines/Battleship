import Ship from "../ship/ship";

// Fill both the player and computer boards with boats
export default function fillGame(realPlayer, comPlayer) {
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);
    
    realPlayer.gameboard.placeBoat(carrier, [0, 0], "y");
    realPlayer.gameboard.placeBoat(battleship, [2, 2], "x");
    realPlayer.gameboard.placeBoat(destroyer, [5, 5], "x");
    realPlayer.gameboard.placeBoat(submarine, [0, 8], "y");
    realPlayer.gameboard.placeBoat(patrolBoat, [9, 0], "x");

    comPlayer.gameboard.placeBoat(carrier, [0, 0], "y");
    comPlayer.gameboard.placeBoat(battleship, [2, 2], "x");
    comPlayer.gameboard.placeBoat(destroyer, [5, 5], "x");
    comPlayer.gameboard.placeBoat(submarine, [0, 8], "y");
    comPlayer.gameboard.placeBoat(patrolBoat, [9, 0], "x");

    realPlayer.DisplayBoard();
}