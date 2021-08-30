function menor(vetor) {
    let posicao = 0;
    let min = 0;
    for (k in vetor) {
        if (vetor[k] < min) {
            min= vetor[k];
            posicao = k;
        }
    }
    return posicao
}

console.log(menor([2, 4, 6, 7, 10, 0, -3]))