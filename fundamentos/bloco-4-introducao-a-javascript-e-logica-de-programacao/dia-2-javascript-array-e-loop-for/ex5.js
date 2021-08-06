let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let i;
let maior = 0

for ( i=0; i < numbers.length ; i+= 1) {
    if ( maior < numbers[i]) {
      maior = numbers[i];
    }
}

console.log(maior);  