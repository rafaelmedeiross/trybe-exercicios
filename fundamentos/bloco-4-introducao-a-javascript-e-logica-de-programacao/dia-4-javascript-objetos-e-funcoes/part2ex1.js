// function palindromo(nome) {
// let letras = nome.split("")
// console.log(letras);
// console.log(letras.reverse());
// console.log(letras.length);
// for (i=0 ; i<6 ; i+=1 ) {
//     console.log(letras[i]+" e " + letras.reverse()[i]);
//     console.log()
// if (letras.reverse()[i] == letras[i]) {
//     return 1
// }
// else {
//     return 2
// }
// }
// }

// console.log(palindromo("rafael"));

function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
}
 

