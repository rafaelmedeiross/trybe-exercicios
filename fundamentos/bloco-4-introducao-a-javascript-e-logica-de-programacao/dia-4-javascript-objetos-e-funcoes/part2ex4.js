function maiorCaracter(nomes) {
    let maxLength = 0;
    let iteracao = 0;
    let maxLengthName= "Rafael";

    for ( let k in nomes ) {
        if (nomes[k].length > maxLength) {
            maxLength = nomes[k].length;
            maxLengthName = nomes[k];
        }
    }
    return maxLengthName
}
console.log(maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
