let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let i;
let menor = 0;
 
for ( i=0; i < numbers.length ; i+= 1) {
    if ( numbers[i+1] > numbers[i]) {
      menor = numbers[i];
    }
}

console.log(menor);  