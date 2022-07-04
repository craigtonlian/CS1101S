// Type your program in here!
function abs(x) {
    return  x < 0
            ? -x
            : x;
}
function average(a, b) {
    return (a + b) / 2;
}
const tolerance = 0.00001;
function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return abs(x - y) < tolerance;
    }
    function try_with(guess) {
        const next = f(guess);
        display(next);
        return close_enough(guess, next)
               ? next
               : try_with(next);
    }
    display(first_guess);
    return try_with(first_guess);
}

fixed_point(x => average(x, math_log(1000) / math_log(x)), 2);
