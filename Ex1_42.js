function compose(f, g) {
    return x => f(g(x));
}
function inc(x) {
    return x+1;
}
function square(x) {
    return x * x;
}
compose(square, inc)(6);