// Type your program in here!
function f(n) {
    return  f_iter(1, 2, 3, n-3);
}

function f_iter(a, b, c, count) {
    return  count === 0
            ? (2 * a + b)
            : f_iter(a + b, 2 * a + c, 3 * a, count - 1);
}

f(5);
