let nota = 10

switch (true) {
    case nota >= 9: 
        console.log("Excelente"); 
        break;
    case nota >= 7: 
        console.log("Bom"); 
        break;
    case nota >= 5: 
        console.log("Regular"); 
        break;
    case nota < 5: 
        console.log("Insuficiente"); 
        break;
    default: 
        console.log("Nota inválida!");
}   