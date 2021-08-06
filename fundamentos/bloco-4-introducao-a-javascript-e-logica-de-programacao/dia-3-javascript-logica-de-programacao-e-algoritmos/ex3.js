let n = 5;

vetor = new Array(n) ; 
vetor.fill(" ");

for (i=(n-1); i >= 0 ; i -= 1 ) {
  vetor[i] = "*";
  console.log(vetor.join(""));
}

