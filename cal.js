const firstNumber = +prompt("first number");
const operator = prompt("operator");
const secNumber = +prompt("scc number");
if (isNaN(firstNumber)|| isNaN(secNumber)){console.log("firstnumber or secNumber must be a number")}

if (operator  === "+" ){console.log(firstNumber+secNumber)}
if (operator  === "-" ){console.log(firstNumber-secNumber)}
if (operator  === "/" ){console.log(firstNumber/secNumber)}
if (operator  === "*" ){console.log(firstNumber*secNumber)}