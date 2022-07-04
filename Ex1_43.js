function compose(f, g) {
    return x => f(g(x));
}
function repeated(f, n) {
    return  n === 1
            ? f
            : repeated(compose(f, f), n - 1);
}
function square(x) {
    return x * x;
}
repeated(square, 2)(5);