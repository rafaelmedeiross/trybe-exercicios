let salarioBruto = 3000;
let salarioLiquido = 0;
let valorIr = 0;
let valorInss = 0;
let salarioParcial = 0;

if (salarioBruto <= 1556.94) {
    valorInss = salarioBruto * (8/100);
} else if (salarioBruto <= 2594.92) {
    valorInss = salarioBruto * (9/100);
} else if (salarioBruto <= 5189.82) {
    valorInss = salarioBruto * (11/100);
} else {
    valorInss = 570.88;
}
salarioParcial = salarioBruto - valorInss;

if (salarioParcial <= 1903.98) {
    valorIr = 0;
} else if (salarioParcial <= 22826.65) {
    valorIr = (salarioParcial * (7.5/100)) - 142.8;
} else if (salarioParcial <= 3751.05) {
    valorIr = (salarioParcial * (15/100)) - 354.8;
} else if (salarioParcial <= 4664.68) {
    valorIr = (salarioParcial * (22.5/100)) - 636.13;
} else {
    valorIr = (salarioParcial * (27.5/100)) - 869.36;
}

salarioLiquido = salarioParcial - valorIr;
console.log(salarioParcial);
console.log(salarioLiquido);
console.log(valorIr);
console.log(valorInss);