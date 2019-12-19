function linearSearch (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}

// It only works for sorted arrays
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
