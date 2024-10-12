function sum1(a, b) {
    

    const sum = a + b
    console.log(sum)
}

function sum2(a, b) {
    

    const sum = a + b;

    return sum;
}
//call the function
sum1(100, 50);
const result = sum2(2, 60);
console.log(result);

// function expression
const multiply = function (a, b) {
    return a * b;
};

const result2 = multiply(5, 5);
console.log(result2);

// arrow functions
// const sub = (a,b)=> a - b;

const sub = (a, b) => {
    return a - b;
};

console.log(sub(50, 10));