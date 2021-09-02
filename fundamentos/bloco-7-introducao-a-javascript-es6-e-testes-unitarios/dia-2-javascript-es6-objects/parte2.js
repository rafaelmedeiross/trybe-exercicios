const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, chave, valor,) => {
 obj[chave] = valor;
}

addTurn(lesson2, 'turno', "manhã")

console.log(lesson2);

const listaKeys = (objeto) => {
 const a = Object.keys(objeto);
 console.log(a);
}

listaKeys(lesson3)

const tamObj = (objeto) => {
 const chavesObjeto = Object.keys(objeto);
 const valoresObjeto = Object.values(objeto);
 let cont1 = 0;
 let cont2 = 0;

 for (let k in chavesObjeto) {
  cont1 += 1;
 }
 for (let k in valoresObjeto) {
  cont2 += 1;
 }

 console.log(`O tamanho é de ${cont1} chaves e de ${cont2} valores totais`);

}

tamObj(lesson3)