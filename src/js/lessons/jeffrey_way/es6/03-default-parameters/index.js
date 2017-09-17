function defaultDiscountRate() {
    return .10;
}
// default parameter as a function return
function applyDiscount(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount);
}

console.log(applyDiscount(100));