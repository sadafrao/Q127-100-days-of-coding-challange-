// Q127
//convert a traditonal function to an arrow function
const traditional = (a: number, b: number): number => {
    return a + b;
}
// convert arrow function
const arrow = (a: number, b: number) => a + b;
console.log(traditional(10, 20));
console.log(arrow(10, 20));

