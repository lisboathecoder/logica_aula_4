let metros = 100;
let unidade = "cm";

switch (unidade) {
    case "cm":
        console.log(`A conversão resulta em ${metros * 100} centímetros`);
        break;
    case "km":
        console.log(`A conversão resulta em ${metros / 1000} quilômetros`);
        break;
    case "mm":
        console.log(`A conversão resulta em ${metros * 1000} milímetros`);
        break;
    default:
        console.log(`Unidade inválida`);
}
// Gustavo Teixeira Lisboa
// 21/03/2025 10:00