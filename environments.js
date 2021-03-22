class A extends Environment {
    constructor() {
        super();
        this.name = "Multiply any 2 digit number by 11";
        this.tags = ["multiplication", "2-digit", "11"];
        this.desc = "You are given a random 2 digit number which you have to multiply with 11.";
        this.note = "";
        // 0 = 2 digit number to multiply by 11
        this.numbers = [];
        this.problem_latex = "";
    }
    next() {
        this.numbers[0] = this.getRandomInt(10, 99);
    }
    check(answer) {
        return answer == this.solve();
    }
    get() {
        return `11 * ${this.numbers[0]}`;
    }
    solve() {
        return `${11 * this.numbers[0]}`;
    }
}
class B extends Environment {
    constructor() {
        super();
        this.name = "Multiply any 3 digit number by 11";
        this.tags = ["multiplication", "3-digit", "11"];
        this.desc = "You are given a random 3 digit number which you have to multiply with 11.";
        this.note = "";
        // 0 = 2 digit number to multiply by 11
        this.numbers = [];
        this.problem_latex = "";
    }
    next() {
        this.numbers[0] = this.getRandomInt(100, 999);
    }
    check(answer) {
        return answer == this.solve();
    }
    get() {
        return `11 * ${this.numbers[0]}`;
    }
    solve() {
        return `${11 * this.numbers[0]}`;
    }
}
