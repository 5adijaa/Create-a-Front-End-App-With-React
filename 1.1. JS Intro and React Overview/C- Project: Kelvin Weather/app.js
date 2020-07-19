// create a constant variable named kelvin
const kelvin = 0;

// convert Kelvin to Celsius
const celsius = kelvin - 273;

// convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//  we are using the floor method to convert the decimal number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

const newton = celsius * (33/100);
console.log(`The temperature is ${newton} degrees Newton`);
