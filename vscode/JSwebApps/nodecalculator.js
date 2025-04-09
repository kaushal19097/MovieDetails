const [,, num1, operator, num2] = process.argv;
const a = parseFloat(num1);
const b = parseFloat(num2);

if (isNaN(a) || isNaN(b)){
  console.log("Invalid numbers provided.");
} else{
  switch (operator){
    case '+':
      console.log(`The result of ${a} + ${b} is ${a + b}`);
      break;
    case '-':
      console.log(`The result of ${a} - ${b} is ${a - b}`);
      break;
    case '*':
      console.log(`The result of ${a} * ${b} is ${a * b}`);
      break;
    case '/':
      if (b === 0){
        console.log("Error: Division by zero is not allowed.");
      } else{
        console.log(`The result of ${a} / ${b} is ${a / b}`);
      }
      break;
    default:
      console.log("Invalid operator. Please use +, -, * or /.");
  }
}
