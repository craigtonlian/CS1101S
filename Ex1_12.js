// Type your program in here!
function pascal(k, n) {
    return  n === 1 || k === n
            ? 1
            : pascal(k - 1, n - 1) + pascal(k - 1, n);
}

pascal(4, 3);