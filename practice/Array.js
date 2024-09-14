
const allName = [
    { name: "abul", age: 20 },
    { name: "kabul", age: 25 },
    { name: "babul", age: 25 },
    { name: "bulbul", age: 25 }
];

function extractNames(array) {
    return array.map(person => person.name);
}
const output = extractNames(allName);
console.log(output); 
