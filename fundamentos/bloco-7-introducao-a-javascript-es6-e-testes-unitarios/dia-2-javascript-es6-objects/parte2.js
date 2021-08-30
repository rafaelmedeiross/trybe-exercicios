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