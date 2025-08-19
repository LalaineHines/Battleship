import Ship from "../ship/ship";

export default function randomPlaceBoat(player) {
    const carrier = new Ship(5);
    const battleship = new Ship(4);
    const destroyer = newShip(3);
    const submarine = new Ship(3);
    const patrolBoat = new Ship(2);

    const ships = new Array();

    ships.push(carrier, battleship, destroyer, submarine, patrolBoat);

    ships.forEach((ship) => {
        validBoat(ship, player);
    });

    return true;
}

function getRandomIndex() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

function validBoat(ship, player) {
    let current = "x";
    const XorY = () => {
        current = current === "x" ? "y" : "x";
        return current
    };

    let valid = false;

    while (valid === false) {
        valid = player.gameboard.placeBoat(ship, getRandomIndex(), XorY());
    }

    return true;
}