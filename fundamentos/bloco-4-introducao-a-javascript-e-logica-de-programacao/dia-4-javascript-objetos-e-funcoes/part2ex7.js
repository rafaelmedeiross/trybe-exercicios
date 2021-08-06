function finalPalavra(word,ending){
    let resposta;
        if (word[word.length -2]  == ending[0]) {
            if (word[word.length -2]  == ending[0]) {
            resposta = true
            }
            else { resposta = false}
        }
        else { resposta = false}

        return resposta
    }
console.log(finalPalavra("rafael","el"))