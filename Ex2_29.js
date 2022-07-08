function make_mobile(left, right) {
    return list(left, right); //[left, [right, null]]
}
function make_branch(length, structure) {
    return list(length, structure); //[length, [structure, null]]
}
function left_branch(m) {
    return head(m);
}
function right_branch(m) {
    return head(tail(m));
}
function branch_length(b) {
    return head(b);
}
function branch_structure(b) {
    return head(tail(b));
}
function is_weight(x) {
    return is_number(x);
}
function total_weight(x) {
    return  is_weight(x)
            ? x
            : total_weight(branch_structure(left_branch(x)))
                + total_weight(branch_structure(right_branch(x)));
}
function is_balanced(x) {
    return  is_weight(x) ||
        (   is_balanced(branch_structure(left_branch(x))) &&
            is_balanced(branch_structure(right_branch(x))) &&
            total_weight(branch_structure(left_branch(x))) * branch_length(left_branch(x))
            ===
            total_weight(branch_structure(right_branch(x))) * branch_length(right_branch(x))
        );
}
