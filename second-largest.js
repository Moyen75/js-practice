// get second largest from an array
const arr = [1, 2, 3, 432, 5332, 543, 4345, 444]

function getSecondLargest(nums) {
    // Complete the function
    let max = -Infinity, result = -Infinity;

    for (const value of nums) {
        const nr = Number(value)

        if (nr > max) {
            [result, max] = [max, nr] // save previous max
        } else if (nr < max && nr > result) {
            result = nr; // new second biggest
        }
    }

    return result;
}
console.log(getSecondLargest(arr))