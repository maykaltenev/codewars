// You are given two sorted arrays that both only contain integers.Your task is to find a way to merge them into a single one, sorted in asc order.Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders.Also arr1 and arr2 may have same integers.Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
    let resultFinal = []; 5, 6
    console.log(arr1) //[ 5, 6, 6, 5 ]
    let mergeTwo = [...arr1, ...arr2];

    console.log(mergeTwo); //[  5, 6, ,b 5, ab1, b6, 7, 8 ]
    let sortedTwo = mergeTwo.sort((a, b) => a - b);
    console.log(sortedTwo);
    for (let i = 0; i < sortedTwo.length; i++) {
        if (!resultFinal.includes(sortedTwo[i])) {
            resultFinal.push(sortedTwo[i])
        }
    }
    return resultFinal;

}
console.log(mergeArrays([5, 6, 6, 5], [1, 6, 7, 8]))