const fibonacciPivot = (number) => {
    let pivot = 0;

    const finalArray = [0];

    if (number < 0) throw new Error("Input number must be greater than 0");
    if (number < 1) {
        return finalArray;
    } else {
        finalArray.push(1);

        for (let i = 0; i < number - 2; i++) {
            finalArray.push(
                Number(finalArray[finalArray.length - 2]) +
                    Number(finalArray[finalArray.length - 1])
            );
        }

        return finalArray;
    }
};

// for (let i = 0; i < 10; i++) {
//     console.log(`Index ${i}: ${fibonacciPivot(i)}`);
// }

// console.time("Execution time");
// fibonacciPivot(42);
// console.timeEnd("Execution time");

const fibonacciRecursion = (number) => {
    return number < 2
        ? number
        : fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
};

const getFibonacciArrayRecursively = (limit) => {
    const finalArray = [];

    for (let i = 0; i < limit; i++) {
        finalArray.push(fibonacciRecursion(i));
    }

    return finalArray;
};

// for (let i = 0; i < 10; i++) {
//     console.log(`Index ${i}: ${fibonacciPivot(i)}`);
// }

// console.time("Execution time");
// getFibonacciArrayRecursively(42);
// console.timeEnd("Execution time");
