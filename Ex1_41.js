function double(f) {
    return x => f(f(x));
}
function inc(x) {
    return x + 1;
}
double(double(double))(inc)(5);