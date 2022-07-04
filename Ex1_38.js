function cont_frac(n, d, k) {
    function cont_frac_iter(i, total) {
        function d(i) {
            return  (i + 1) % 3 === 0
                    ? (i + 1) / 3
                    : 1;
        }
        return  i === 0
                ? total
                : cont_frac_iter(i - 1, n(i) / (total + d(i)));
    }
    return  cont_frac_iter(k, 0);
}

const frac_e = cont_frac(i => 1, i => ((i + 1) % 3 === 0) ? (i + 1) / 3 : 1 , 10);
2 + frac_e;
