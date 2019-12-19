function linearSearch (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}

let linearNumbers = [1, 15, 4, 6, 74, 23];
console.log(linearSearch(linearNumbers, 55));
console.log(linearSearch(linearNumbers, 6));

function binarySearch (arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);

    while (arr[middle] !== elem && start <= end) {
        if (arr[middle] > elem) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }

    if (arr[middle] === elem) {
        return middle;
    }

    return -1;
}

let binaryNumbers = [1, 5, 6, 18, 22, 23, 60, 77, 82, 99];
console.log(binarySearch(binaryNumbers, 60));
console.log(binarySearch(binaryNumbers, 6));