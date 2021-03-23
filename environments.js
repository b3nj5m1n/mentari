class A extends Environment {
    constructor() {
        super();
        this.name = "Multiply any 2 digit number by 11";
        this.tags = ["multiplication", "2-digit", "11"];
        this.desc = "You are given a random 2 digit number which you have to multiply with 11.";
        this.note = "Chapter 0";
        this.time_start = new Date().getTime()
        this.time_end = null;
        this.solved = false;
        // 0 = 2 digit number to multiply by 11
        this.numbers = [];
    }
    next() {
        this.store();
        this.numbers[0] = this.getRandomInt(10, 99);
        this.time_start = new Date().getTime();
    }
    check(answer) {
        this.solved = (answer == this.solve());
        if (this.solved) {
            this.time_end = new Date().getTime();
        }
        return this.solved;
    }
    get() {
        return `11 * ${this.numbers[0]}`;
    }
    solve() {
        return `${11 * this.numbers[0]}`;
    }
    store() {
        var n = window.localStorage.length;
        while (window.localStorage.getItem(n.toString()) !== null) {
            n += 1;
        }
        window.localStorage.setItem(n.toString(), JSON.stringify(this));
    }
}
