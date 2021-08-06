let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let i;
let maior = 0
let impar = 0;
let par = 0;
let n =2;

for ( i=0; i < numbers.length ; i+= 1) {
    if ( (numbers[i]% 2 == 0) ) {
        par += 1;
    }
    else {
        impar += 1;
    }
}

console.log(impar);
console.log(numbers.join(" "));
console.log(numbers.length)
console.log(par);
