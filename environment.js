class Environment {
    constructor(name, tags, desc, note) {
        this.name = name;
        this.tags = tags;
        this.desc = desc;
        this.note = note;
        this.ready = false;
        this.time_start = new Date().getTime()
        this.time_end = null;
        this.solved = false;
        // Contains all the variable numbers
        this.numbers = []
    }
    // Store to local storage,
    // Generate the next random question,
    // Record time of starting
    next() {
        if (this.ready) { this.store(); }
        this.generate();
        this.time_start = new Date().getTime();
        this.ready = true;
    }
    // Check if the answer is correct
    check(answer) {
        this.solved = (answer.toLowerCase() == this.solve().toLowerCase());
        if (this.solved) {
            this.time_end = new Date().getTime();
        }
        return this.solved;
    }
    // Generates the numbers[] array
    generate() {
        throw new Error("Method 'generate()' must be implemented.");
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
        /* var n = window.localStorage.length;
        while (window.localStorage.getItem(n.toString()) !== null) {
            n += 1;
        } */
        window.localStorage.setItem(this.time_start.toString(), JSON.stringify(this));
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
