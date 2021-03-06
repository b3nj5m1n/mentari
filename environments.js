
/*
 * Drills
*/

class D01 extends Environment {
    constructor() {
        super("Addition of 1-digit numbers",
            [
                "drill_01",
                "addition",
                "1-digit"
            ],
            "",
            "Drill 1"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 9);
        this.numbers[1] = this.getRandomInt(1, 9);
    }
    get() {
        return `${this.numbers[0]} + ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] + this.numbers[1]}`;
    }
}
class D02 extends Environment {
    constructor() {
        super("Subraction of 1-digit numbers",
            [
                "drill_02",
                "subraction",
                "1-digit"
            ],
            "",
            "Drill 2"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 9);
        this.numbers[1] = this.getRandomInt(1, this.numbers[0]);
    }
    get() {
        return `${this.numbers[0]} - ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] - this.numbers[1]}`;
    }
}
class D03 extends Environment {
    constructor() {
        super("Multiplication of 1-digit numbers",
            [
                "drill_03",
                "multiplication",
                "1-digit"
            ],
            "",
            "Drill 3"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 9);
        this.numbers[1] = this.getRandomInt(1, 9);
    }
    get() {
        return `${this.numbers[0]} * ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] * this.numbers[1]}`;
    }
}

/*
 * Chapter 0
*/

class C0_M01 extends Environment {
    constructor() {
        super("Multiply any 2 digit number by 11",
            [
                "chapter_0",
                "method_01",
                "multiplication",
                "2_digit",
                "11"
            ],
            "",
            "Chapter 0, Method 1"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(10, 99);
    }
    get() {
        return `11 * ${this.numbers[0]}`;
    }
    solve() {
        return `${11 * this.numbers[0]}`;
    }
}
class C0_M02 extends Environment {
    constructor() {
        super("Multiply any 3 digit number by 11",
            [
                "chapter_0",
                "method_02",
                "multiplication",
                "3_digit",
                "11"
            ],
            "",
            "Chapter 0, Method 2"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(100, 999);
    }
    get() {
        return `11 * ${this.numbers[0]}`;
    }
    solve() {
        return `${11 * this.numbers[0]}`;
    }
}
class C0_M03 extends Environment {
    constructor() {
        super("Square a two digit number ending in 2",
            [
                "chapter_0",
                "method_03",
                "multiplication",
                "squaring",
                "2_digit",
                "suffix_5"
            ],
            "",
            "Chapter 0, Method 3"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 9)*10+5;
    }
    get() {
        return `${this.numbers[0]}^2`;
    }
    solve() {
        return `${Math.pow(this.numbers[0], 2)}`;
    }
}
class C0_M04 extends Environment {
    constructor() {
        super("Multiply two 2 digit numbers with the same first digit and end digits summing to 10",
            [
                "chapter_0",
                "method_04",
                "multiplication",
                "2_digit",
                "prefix_same",
                "suffix_complementary"
            ],
            "You are given two 2 digit numbers, the first digits of these numbers are the same, the last digit of the first number + the first digit of the second number = 10",
            "Chapter 0, Method 4"
        );
    }
    generate() {
        var prefix = this.getRandomInt(1, 9);
        var suffix_1 = this.getRandomInt(1, 9);
        var suffix_2 = 10 - suffix_1;
        this.numbers[0] = prefix*10+suffix_1;
        this.numbers[1] = prefix*10+suffix_2;
    }
    get() {
        return `${this.numbers[0]} * ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0]*this.numbers[1]}`;
    }
}
class C0_M05 extends Environment {
    constructor() {
        super("Calculate 15 % of arbitrary number",
            [
                "chapter_0",
                "method_05",
                "percentages",
                "15",
            ],
            "",
            "Chapter 0, Method 5"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 999);
    }
    get() {
        return `15 \\% \\; \\textrm{of} \\; ${this.numbers[0]}`;
    }
    solve() {
        return `${this.numbers[0]*(15/100)}`;
    }
}
class C0_M06 extends Environment {
    constructor() {
        super("Calculate weekday of a newyears in the 21. century",
            [
                "chapter_0",
                "method_06",
                "weekdays",
            ],
            "",
            "Chapter 0, Method 6"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(2000, 2099);
    }
    get() {
        return `\\textrm{Weekday of newyears ${this.numbers[0]}}`;
    }
    solve() {
        return `${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date('01 Jan ' + this.numbers[0] + ' 00:00:00 GMT'))}`;
    }
}

/*
 * Chapter 1
*/

class C1_M01 extends Environment {
    constructor() {
        super("Addition of 2-digit numbers",
            [
                "chapter_1",
                "method_01",
                "addition",
                "2_digit",
            ],
            "",
            "Chapter 1, Method 1"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(10, 99);
        this.numbers[1] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]} + ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] + this.numbers[1]}`;
    }
}
class C1_M02 extends Environment {
    constructor() {
        super("Addition of 3-digit numbers",
            [
                "chapter_1",
                "method_02",
                "addition",
                "3_digit",
            ],
            "",
            "Chapter 1, Method 2"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(100, 999);
        this.numbers[1] = this.getRandomInt(100, 999);
    }
    get() {
        return `${this.numbers[0]} + ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] + this.numbers[1]}`;
    }
}
class C1_M03 extends Environment {
    constructor() {
        super("Subraction of 2-digit numbers",
            [
                "chapter_1",
                "method_03",
                "subraction",
                "2_digit",
            ],
            "",
            "Chapter 1, Method 3"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(10, 99);
        this.numbers[1] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]} - ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] - this.numbers[1]}`;
    }
}
class C1_M04 extends Environment {
    constructor() {
        super("Subraction of 3-digit numbers",
            [
                "chapter_1",
                "method_04",
                "subraction",
                "3_digit",
            ],
            "",
            "Chapter 1, Method 4"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(100, 999);
        this.numbers[1] = this.getRandomInt(100, 999);
    }
    get() {
        return `${this.numbers[0]} - ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] - this.numbers[1]}`;
    }
}

/*
 * Chapter 2
*/

class C2_M01 extends Environment {
    constructor() {
        super("Multiplication of a 2-digit number with a 1-digit number",
            [
                "chapter_2",
                "method_01",
                "multiplication",
                "2_digit",
                "1_digit",
            ],
            "",
            "Chapter 2, Method 1"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 9);
        this.numbers[1] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]} * ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] * this.numbers[1]}`;
    }
}
class C2_M02 extends Environment {
    constructor() {
        super("Multiplication of a 3-digit number with a 1-digit number",
            [
                "chapter_2",
                "method_02",
                "multiplication",
                "3_digit",
                "1_digit",
            ],
            "",
            "Chapter 2, Method 2"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 9);
        this.numbers[1] = this.getRandomInt(100, 999);
    }
    get() {
        return `${this.numbers[0]} * ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] * this.numbers[1]}`;
    }
}
class C2_M03 extends Environment {
    constructor() {
        super("Square any 2-digit number",
            [
                "chapter_2",
                "method_03",
                "multiplication",
                "squaring",
                "2_digit",
            ],
            "",
            "Chapter 2, Method 3"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]}^2`;
    }
    solve() {
        return `${Math.pow(this.numbers[0], 2)}`;
    }
}

/*
 * Chapter 3
*/

class C3_M01 extends Environment {
    constructor() {
        super("Multiplication of 2 2-digit numbers",
            [
                "chapter_3",
                "method_01",
                "multiplication",
                "2_digit",
            ],
            "",
            "Chapter 3, Method 1"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(10, 99);
        this.numbers[1] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]} * ${this.numbers[1]}`;
    }
    solve() {
        return `${this.numbers[0] * this.numbers[1]}`;
    }
}
class C3_M02 extends Environment {
    constructor() {
        super("Square any 3-digit number",
            [
                "chapter_3",
                "method_02",
                "multiplication",
                "squaring",
                "3_digit",
            ],
            "",
            "Chapter 3, Method 2"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(100, 999);
    }
    get() {
        return `${this.numbers[0]}^2`;
    }
    solve() {
        return `${Math.pow(this.numbers[0], 2)}`;
    }
}
class C3_M03 extends Environment {
    constructor() {
        super("Cube any 2-digit number",
            [
                "chapter_3",
                "method_03",
                "multiplication",
                "cubing",
                "2_digit",
            ],
            "",
            "Chapter 3, Method 3"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]}^3`;
    }
    solve() {
        return `${Math.pow(this.numbers[0], 3)}`;
    }
}

/*
 * Chapter 4
*/

class C4_M01 extends Environment {
    constructor() {
        super("Division of a 3-digit number by a 1-digit number",
            [
                "chapter_4",
                "method_01",
                "division",
                "3_digit",
                "1_digit",
            ],
            "",
            "Chapter 4, Method 1"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(100, 999);
        this.numbers[1] = this.getRandomInt(1, 9);
    }
    get() {
        return `${this.numbers[0]} \\div ${this.numbers[1]}`;
    }
    solve() {
        return `${(this.numbers[0] / this.numbers[1]).toFixed(2)}`;
    }
}
class C4_M02 extends Environment {
    constructor() {
        super("Division of a 4-digit number by a 1-digit number",
            [
                "chapter_4",
                "method_02",
                "division",
                "3_digit",
                "1_digit",
            ],
            "",
            "Chapter 4, Method 2"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1000, 9999);
        this.numbers[1] = this.getRandomInt(1, 9);
    }
    get() {
        return `${this.numbers[0]} \\div ${this.numbers[1]}`;
    }
    solve() {
        return `${(this.numbers[0] / this.numbers[1]).toFixed(2)}`;
    }
}
class C4_M03 extends Environment {
    constructor() {
        super("Division of a 3-digit number by a 2-digit number",
            [
                "chapter_4",
                "method_03",
                "division",
                "3_digit",
                "2_digit",
            ],
            "",
            "Chapter 4, Method 3"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(100, 999);
        this.numbers[1] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]} \\div ${this.numbers[1]}`;
    }
    solve() {
        return `${(this.numbers[0] / this.numbers[1]).toFixed(2)}`;
    }
}
class C4_M04 extends Environment {
    constructor() {
        super("Division of a 4-digit number by a 2-digit number",
            [
                "chapter_4",
                "method_04",
                "division",
                "4_digit",
                "2_digit",
            ],
            "",
            "Chapter 4, Method 4"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1000, 9999);
        this.numbers[1] = this.getRandomInt(10, 99);
    }
    get() {
        return `${this.numbers[0]} \\div ${this.numbers[1]}`;
    }
    solve() {
        return `${(this.numbers[0] / this.numbers[1]).toFixed(2)}`;
    }
}
class C4_M05 extends Environment {
    constructor() {
        super("Multiplication of fractions",
            [
                "chapter_4",
                "method_05",
                "multiplication",
                "fractions",
            ],
            "",
            "Chapter 4, Method 5"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 11);
        this.numbers[1] = this.getRandomInt(1, 11);
        this.numbers[2] = this.getRandomInt(1, 11);
        this.numbers[3] = this.getRandomInt(1, 11);
    }
    get() {
        return `\\frac{${this.numbers[0]}}{${this.numbers[1]}} * \\frac{${this.numbers[2]}}{${this.numbers[3]}}`;
    }
    solve() {
        var x = new math.fraction(`${this.numbers[0]}/${this.numbers[1]}`);
        var y = new math.fraction(`${this.numbers[2]}/${this.numbers[3]}`);
        const RES = x.mul(y);
        return `\\frac{${RES.n}}{${RES.d}}`;
    }
}
class C4_M06 extends Environment {
    constructor() {
        super("Division of fractions",
            [
                "chapter_4",
                "method_06",
                "division",
                "fractions",
            ],
            "",
            "Chapter 4, Method 6"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 11);
        this.numbers[1] = this.getRandomInt(1, 11);
        this.numbers[2] = this.getRandomInt(1, 11);
        this.numbers[3] = this.getRandomInt(1, 11);
    }
    get() {
        return `\\frac{${this.numbers[0]}}{${this.numbers[1]}} \\div \\frac{${this.numbers[2]}}{${this.numbers[3]}}`;
    }
    solve() {
        var x = new math.fraction(`${this.numbers[0]}/${this.numbers[1]}`);
        var y = new math.fraction(`${this.numbers[2]}/${this.numbers[3]}`);
        const RES = x.div(y);
        return `\\frac{${RES.n}}{${RES.d}}`;
    }
}
class C4_M07 extends Environment {
    constructor() {
        super("Addition of fractions",
            [
                "chapter_4",
                "method_07",
                "addition",
                "fractions",
            ],
            "",
            "Chapter 4, Method 7"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 11);
        this.numbers[1] = this.getRandomInt(1, 11);
        this.numbers[2] = this.getRandomInt(1, 11);
        this.numbers[3] = this.getRandomInt(1, 11);
    }
    get() {
        return `\\frac{${this.numbers[0]}}{${this.numbers[1]}} + \\frac{${this.numbers[2]}}{${this.numbers[3]}}`;
    }
    solve() {
        var x = new math.fraction(`${this.numbers[0]}/${this.numbers[1]}`);
        var y = new math.fraction(`${this.numbers[2]}/${this.numbers[3]}`);
        const RES = x.add(y);
        return `\\frac{${RES.n}}{${RES.d}}`;
    }
}
class C4_M08 extends Environment {
    constructor() {
        super("Subraction of fractions",
            [
                "chapter_4",
                "method_07",
                "subtraction",
                "fractions",
            ],
            "",
            "Chapter 4, Method 8"
        );
    }
    generate() {
        this.numbers[0] = this.getRandomInt(1, 11);
        this.numbers[1] = this.getRandomInt(1, 11);
        this.numbers[2] = this.getRandomInt(1, 11);
        this.numbers[3] = this.getRandomInt(1, 11);
    }
    get() {
        return `\\frac{${this.numbers[0]}}{${this.numbers[1]}} - \\frac{${this.numbers[2]}}{${this.numbers[3]}}`;
    }
    solve() {
        var x = new math.fraction(`${this.numbers[0]}/${this.numbers[1]}`);
        var y = new math.fraction(`${this.numbers[2]}/${this.numbers[3]}`);
        const RES = x.sub(y).tomath.fraction(true);
        return `${((RES.s < 0) ? '-' : '')}\\frac{${RES.n}}{${RES.d}}`;
    }
}
