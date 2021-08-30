function maior(vetor) {
    let posicao = 0;
    let max = 0;
    for (k in vetor) {
        if (vetor[k] > max) {
            max= vetor[k];
            posicao = k;
        }
    }
    return posicao
}

console.log(maior([2, 3, 6, 7, 10, 1]))