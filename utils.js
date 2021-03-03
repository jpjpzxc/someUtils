
let product = function (array) {
    let count = 1;
    for (let value of array) {
        if (typeof value === "number") {
            count *= value;
        }
    }
    return count; 
}

console.log ("total:" + product([1, 2])); 