function checkType(value) {
    if (typeof value === 'number') {
        console.log("This is a number.");
    } else if (typeof value === 'string') {
        console.log("This is a string.");
    } else if (typeof value === 'boolean') {
        console.log("This is a boolean.");
    } else {
        console.log("Unknown type.");
    }
}
checkType(10);  
