class Environment {
    constructor(name, tags) {
        this.name = null;
        this.tags = null;
        this.desc = null;
        this.note = null;
        // Contains all the variable numbers
        this.numbers = []
        this.problem_latex = "";
    }
    // Generate the next random question
    next() {
        throw new Error("Method 'next()' must be implemented.");
    }
    // Check if the answer is correct
    check(answer) {
        throw new Error("Method 'check()' must be implemented.");
    }
    // Returns the latex for the current question
    get() {
        throw new Error("Method 'get()' must be implemented.");
    }
    // Returns latex for solution
    solve() {
        throw new Error("Method 'solve()' must be implemented.");
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
