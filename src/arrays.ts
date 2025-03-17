/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
//use filter
//[1, 2, 3] -> [1, 3]
//[1]-> [1, 1]
//[]->[]
export function bookEndList(numbers: number[]): number[] {
    //first check the length
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return numbers.filter(
        (_, index, array) => index === 0 || index === array.length - 1,
    );
    //return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((num: number): number => num * 3);
    //return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((str) => {
        const parsedNum = parseInt(str, 10);
        if (isNaN(parsedNum)) {
            return 0;
        } else {
            return parsedNum;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((str) => {
        const noDollar = str.startsWith("$") ? str.slice(1) : str;
        const parsedNum = parseInt(noDollar, 10);
        if (isNaN(parsedNum)) {
            return 0;
        } else {
            return parsedNum;
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestionMark = messages.filter((str) => !str.endsWith("?"));
    const uppercase = noQuestionMark.map((str) =>
        str.endsWith("!") ? str.toUpperCase() : str,
    );
    return uppercase;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
//1. count how many characters are in each string
//2. use an accumulator(reduce) or .every to keep track of the numbers that are less than 4
export function countShortWords(words: string[]): number {
    const characterNum = words.map((str) => str.length);
    const numbersLess4 = characterNum.reduce((currentTotal, num) => {
        return num < 4 ? currentTotal + 1 : currentTotal;
    }, 0);
    return numbersLess4;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = (color: string): boolean =>
        color === "red" || color === "blue" || color === "green";
    return colors.every(RGB);
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const stringMath = addends.reduce(
        (totalSum, current) => totalSum + current,
        0,
    );
    const num = addends.join(`+`);
    return `${stringMath}=${num}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegIndex = values.findIndex((num) => num < 0);
    if (firstNegIndex === -1) {
        const sum = values.reduce((totalSum, current) => totalSum + current, 0);
        return [...values, sum];
    }
    //sum before neg num
    const sumBeforeNeg = values.reduce((totalSum, current, index) => {
        if (index < firstNegIndex) {
            return totalSum + current;
        }
        return totalSum;
    }, 0);
    const result = [...values];
    result.splice(firstNegIndex + 1, 0, sumBeforeNeg);
    return result;
}
