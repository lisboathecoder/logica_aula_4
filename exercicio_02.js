let num1 = 13
let num2 = 10
let calculo = "divisão"

switch (calculo) {
    case "soma" :  
        console.log(`O resultado da soma é ${num1 + num2}`); 
        break;
    case "divisão" : 
        console.log(`O resultado da divisão é ${num1 / num2}`); 
        break;
    case "multiplicação" : 
        console.log(`O resultado da multiplicação é ${num1 * num2}`); 
        break;
    case "subtração" : 
        console.log(`O resultado da subtração é ${num1 - num2}`); 
        break;
    default: 
     console.log(`Operação inválida`)
    
}