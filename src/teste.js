const alunos = [
    {nome: 'Ya', nota: 5},
    {nome: 'Ye', nota: 6},
    {nome: 'Yi', nota: 7},
    {nome: 'Yo', nota: 8},
    {nome: 'Yu', nota: 9},

];

const alunos2 = alunos.map(function(Atual){
    return{
        nome: Atual,
        curso: 'FrontEnd'
    }
})

const alunosaprovados = alunos.filter(function(item){
    return item.nota >= 6
})

console.log(alunosaprovados)