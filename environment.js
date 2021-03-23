class Environment {
    constructor(name, tags) {
        this.name = null;
        this.tags = null;
        this.desc = null;
        this.note = null;
        this.time_start = null;
        this.time_end = null;
        this.solved = null;
        // Contains all the variable numbers
        this.numbers = []
    }
    // Store to local storage,
    // Generate the next random question,
    // Record time of starting
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
    // Returns latex for solution,
    // if correct records time of solving
    solve() {
        throw new Error("Method 'solve()' must be implemented.");
    }
    // Stores all the abvailable information in local storage
    store() {
        throw new Error("Method 'store()' must be implemented.");
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
