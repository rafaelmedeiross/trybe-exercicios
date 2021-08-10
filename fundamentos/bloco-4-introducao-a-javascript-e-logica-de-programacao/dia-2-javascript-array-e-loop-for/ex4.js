let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let i;
for ( i=0; i<numbers.length ; i+= 1) {
  soma = numbers[i] + soma;
}
if (soma < 20) {
  console.log("valor menor ou igual a 20")
}
