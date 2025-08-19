import Ship from "./ship.js";

// hit
test("Is hit updating class hits", () => {
    const destroyer = new Ship(6);
    destroyer.hit();
    expect(destroyer.hits).toBe(1);
});

test("ship taking multiple hits",  () => {
    const destroyer = new Ship(6);
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.hits),toEqual(5);
});

// isSunk
test("isSunk correct", () => {
    const patrolBoat = new Ship(2);
    patrolBoat.hit();
    patrolBoat.hit();
    expect(patrolBoat.isSunk()).toBeTruthy();
});

test("IsSunk Not Sunk", () => {
    const patrolBoat = new Ship(2);
    patrolBoat.hit();
    patrolBoat.hit();
    expect(patrolBoat.isSunk()).toBeFalsy();
});