class Ship {
    constructor(length, hits = 0, Sunk = false) {
        this.length = length;
        this.hits = hits;
        this.Sunk = Sunk;
    }

    hit() {
        if (this,hits < this.length) {
            this.hits++;
        }
        return this.hits;
    }

    isSunk() {
        if (this.length === this.hits) {
            return (this.Sunk = true);
        } else {
            return this.Sunk;
        }
    }
}

export default Ship;