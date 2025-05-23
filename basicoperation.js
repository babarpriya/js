function calculate(a, b, operator) {
      if (operator === '+') {
        console.log("Result:", a + b);
    } else if (operator === '-') {
        console.log("Result:", a - b);
    } else if (operator === '*') {
        console.log("Result:", a * b);
    } else if (operator === '/') {
        if (b !== 0) {
            console.log("Result:", a / b);
        } else {
            console.log("Cannot divide by zero");
        }
    } else {
        console.log("Invalid operator");
    }
}
calculate(10, 5, '+'); 
calculate(10, 5, '-');  
calculate(10, 5, '*');  
calculate(10, 5, '/');  
calculate(10, 0, '/'); 
