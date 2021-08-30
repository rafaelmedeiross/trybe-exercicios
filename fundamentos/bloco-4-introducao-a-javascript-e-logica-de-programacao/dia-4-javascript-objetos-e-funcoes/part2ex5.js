function moda(vetor) {

    let numeroModa = 0;
    let maxModa = 0;
    let qntRepeticao = new Array();
    let posicao;

    for ( let k in vetor ) {
        qntRepeticao[k] = 0;
        for ( let i in vetor) {
            if (vetor[k] == vetor[i]) {
            qntRepeticao[k] += 1;
            }
        }
    }
    for (let k in qntRepeticao) {
        if (qntRepeticao[k] > maxModa) {
            maxModa = qntRepeticao[k];
            posicao = k;
        }
    }
    return vetor[posicao]
}
console.log(moda([2, 3, 2, 5, 8, 2, 3]))
