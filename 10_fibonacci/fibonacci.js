const fibonacci = function(n) {
    let num1 = 0;
    let num2 = 1; 

    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    
    for (let i = 1; i < n; i++) {
        let temp = num2;
        num2 = num1 + num2;
        num1 = temp;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
