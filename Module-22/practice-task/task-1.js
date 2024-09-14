function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5)+ 32;
    return fahrenheit;
}
const tempareture =parseInt(celsiusToFahrenheit(74));
console.log(tempareture)