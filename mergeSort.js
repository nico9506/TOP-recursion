const mergeSort = (inputArray) => {
    /**
     * Merge sort algorithm using recursion
     *
     * @param {Array} inputArray collection of numbers
     * @returns {Array} sorted collection of numbers
     */

    const finalSortedArray = [];

    if (inputArray.length < 2) return inputArray;

    if (inputArray.length === 2) {
        const newSortedArray = [];
        inputArray[0] < inputArray[1]
            ? newSortedArray.push(inputArray[0], inputArray[1])
            : newSortedArray.push(inputArray[1], inputArray[0]);

        return newSortedArray;
    }

    const leftHalf = mergeSort(inputArray.splice(0, inputArray.length / 2));
    const rightHalf = mergeSort(inputArray);

    while (leftHalf.length > 0 && rightHalf.length > 0) {
        leftHalf[0] < rightHalf[0]
            ? finalSortedArray.push(...leftHalf.splice(0, 1))
            : finalSortedArray.push(...rightHalf.splice(0, 1));
    }

    finalSortedArray.push(...leftHalf, ...rightHalf);

    return finalSortedArray;
};

// console.log(mergeSort([105, 79, 100, 110]));
