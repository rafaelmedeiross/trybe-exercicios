function somaDecrescente(n) {
    let soma = 0;
    for (let k =1; k <= n ; k += 1 ) {
        soma += k;
    }
    return soma
}

console.log(somaDecrescente(5))