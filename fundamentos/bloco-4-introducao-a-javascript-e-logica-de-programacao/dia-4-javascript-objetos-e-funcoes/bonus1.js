function numRomano(n) {
    // let n = "XI"

    let vetor = new Array(n.length+1)
    let numeroFinal = 0;
    vetor[n.length] = 0;
    for (k in n) {
        switch (n[k]) {
            case "I":
                vetor[k] = 1;
                break;
            case "V":
                vetor[k] = 5;
                break;
            case "X":
                vetor[k] = 10;
                break;
            case "L":
                vetor[k] = 50;
                break;
            case "C":
                vetor[k] = 100;
                break;
            case "D":
                vetor[k] = 500;
                break;
            case "M":
                vetor[k] = 1000;
                break;
        }
    }

    for (let k = 0; k < n.length; k += 1) {
        if (vetor[k] >= vetor[k+1]) {
            numeroFinal += vetor[k];
        }
        else {
        if ((vetor[k+1] < vetor[k+2]) || (vetor[k] == "V")) {
            numeroFinal = "Numero não existente";
            break;
        }
        else {
            numeroFinal -= vetor[k];
 
        }
      }
    }
    return numeroFinal
}


console.log(numRomano("XCVII"))
