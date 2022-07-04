function cont_frac(n, d, k) {
    function cont_frac_iter(i, total) {
        return  i === 0
                ? total
                : cont_frac_iter(i - 1, n(i) / (total + d(i)));
    }
    return  cont_frac_iter(k, 0);
}

cont_frac(i => 1, i => 1, 10);