module.exports = function reverse (n) {
    var rev = Math.abs(n);
    return rev.toString().split("").reverse().join("");
}

