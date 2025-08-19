import Player from "./player";

test("set up real player", () => {
    const realPlayer = new Player("real");
    expect(realPlayer.type).toMatch(/real/);
});

test("set up computer player", () => {
    const computerPlayer = new Player("computer");
    expect(computerPlayer).toMatch(/computer/);
});

test("Player Gameboard exists", () => {
    const realPlayer = new Player("real");
    expect(Array.isArray(realPlayer.gameboard.board)).toBeTruthy();
});