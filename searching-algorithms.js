function linearSearch (arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
}

let numbers = [1, 15, 4, 6, 74, 23];
console.log(linearSearch(numbers, 55));
console.log(linearSearch(numbers, 6));
