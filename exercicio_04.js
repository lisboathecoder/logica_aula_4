let idade = 61

switch (true) {
    case idade <= 12: 
        console.log(`É Uma criança`); 
    break;
    case idade <= 17: 
        console.log(`É Um Adolescente`); 
    break;
    case idade <= 59: 
        console.log(`É Um Adulto`); 
    break;
    case idade >= 60: 
        console.log(`É Um Idoso`);
    break;
    default: 
        console.log("Idade inválida")
}