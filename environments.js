// Multiply any 2 digit number by 11
class A extends Environment {
    constructor() {
        super("Multiply any 2 digit number by 11", "multiplication;11");
        // 0 = 2 digit number to multiply by 11
        this.numbers = []
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
