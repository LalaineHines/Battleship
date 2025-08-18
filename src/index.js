import "./style.css";

import GameFlow from "./gameFlow/gameFlow.js";
import Player from "./player/player.js";

document.addEventListener("DOMContentLoaded", () => {
    // Start First Game
    let realPlayer = new Player("real");
    let comPlayer = new Player("computer");
    let newGame = new GameFlow(realPlayer, comPlayer);
    newGame.initialize();

    // Restart Game
    const restartButtons = document.querySelectorAll(".restartButton");
    restartButtons.forEach((restartButton) => 
        restartButton.addEventListener("click", () => newGame.restartGame())
);

// Play Round
// add eventlistener to each cell in the table. the real player opponent grid has the event listeners
const TD = document.querySelectorAll(".computerPlayerBoard>tbody>tr>td");
TD.forEach((cell) => {
    cell.removeEventListener("click", () => tdEventHandler(cell, newGame));
    cell.addEventListener("click", () => tdEventHandler(cell, newGame)),
    { once: true };
    });
});

// Handle the adding and removing of <td>
function tdEventHandler(cell, newGame) {
    let index =cell.id;
    let last3Char = index.substring(index.length - 3);
    let col = last3Char.charAt(2);
    let row = last3Char.charAt(0);
    const playerResult = newGame.playRound(row, col);

    // Only if the Player misses
    if (playerResult === false) {
        // Toggle which grid to display after turn
        document.querySelector(".realPlayerBoard").classList.toggle("activeGrid");
        document
        .querySelector(".computerPlayerBoard")
        .classList.toggle("activeGrid");

        // Then run switchPlayer
        newGame.switchOpponentTurn();
        newGame.switchPlayerTurn();
    }
}