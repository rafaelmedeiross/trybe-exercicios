let n = 100;

vetor = new Array(n) ; 
vetor.fill(" ");

for (i=0; i < n ; i += 1 ) {
  if ( (n % 2) == 0 ) {
    vetor[(n/2)-i] = "*";
    vetor[(n/2)+(i+1)] = "*";
    if (((n/2)-i) == 0 ) {
      break
    }
  }
  else {
    vetor[(Math.trunc(n/2)+1) +i] = "*";
    vetor[(Math.trunc(n/2)+1)-i] = "*";
    if (((Math.trunc(n/2)+1)-i) == 0) {
      break
    }
  }
  console.log(vetor.join(""));
}

