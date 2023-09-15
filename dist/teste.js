"use strict";

console.log("Olá Babel");
console.log("Olá Babsel");
var alunos = [{
  nome: 'Ya',
  nota: 5
}, {
  nome: 'Ye',
  nota: 6
}, {
  nome: 'Yi',
  nota: 7
}, {
  nome: 'Yo',
  nota: 8
}, {
  nome: 'Yu',
  nota: 9
}];
var alunos2 = alunos.map(function (Atual) {
  return {
    nome: Atual,
    curso: 'FrontEnd'
  };
});

// console.log(alunos2)

// alunos.push({
//     nome: 'Ye',
//     nota: 2,
// })

var alunosaprovados = alunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(alunosaprovados);