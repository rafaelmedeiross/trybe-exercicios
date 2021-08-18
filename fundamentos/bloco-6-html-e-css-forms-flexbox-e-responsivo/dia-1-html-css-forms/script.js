let estados = [
  "AC - Acre",
  "AL - Alagoas",
  "AP - Amapá",
  "AM - Amazonas",
  "BA - Bahia",
  "CE - Ceará",
  "DF - Distrito Federal",
  "ES - Espírito Santo",
  "GO - Goías",
  "MA - Maranhão",
  "MT - Mato Grosso",
  "MS - Mato Grosso do Sul",
  "MG - Minas Gerais",
  "PA - Pará",
  "PB - Paraíba",
  "PR - Paraná",
  "PE - Pernambuco",
  "PI - Piauí",
  "RJ - Rio de Janeiro",
  "RN - Rio Grande do Norte",
  "RS - Rio Grande do Sul",
  "RO - Rondônia",
  "RR - Roraíma",
  "SC - Santa Catarina",
  "SP - São Paulo",
  "SE - Sergipe",
  "TO - Tocantins",
];

const estadoPai = document.querySelector("#state");
for (let k of estados) {
  optionsTag = document.createElement("option");
  optionsTag.innerText = k;
  optionsTag.value = k;
  console.log(k);
  estadoPai.appendChild(optionsTag);
}

let campo2 = document.createElement("fieldset");
let cv = document.createElement("input");
let cargo = document.createElement("input");
let desCargo = document.createElement("input");
let dataInicio = document.createElement("input");
document.body.appendChild(campo2);
