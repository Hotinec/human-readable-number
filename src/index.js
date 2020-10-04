module.exports = function toReadable(number) {
    const numbers = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let result = "";

    if (number === 0) return "zero";

    if (number % 100 !== number) {
        const hundred = Math.trunc(number / 100);
        result += numbers[hundred] + " hundred ";
        number = number % 100;
    }

    if (number % 10 !== number) {
        if (number >= 10 && number < 20) {
            return result + firstDozen(number);
        }
        const dozen = Math.trunc(number / 10);
        result += dozens[dozen] + " ";
        number = number % 10;
    }

    if (number !== 0) {
        result += numbers[number];
    }

    function firstDozen(number) {
        if (number === 10) return "ten";
        if (number === 11) return "eleven";
        if (number === 12) return "twelve";
        if (number === 13) return "thirteen";
        if (number === 14) return "fourteen";
        if (number === 15) return "fifteen";
        if (number === 16) return "sixteen";
        if (number === 17) return "seventeen";
        if (number === 18) return "eighteen";
        if (number === 19) return "nineteen";
    }

    return result.trim();
};
