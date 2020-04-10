const array = [1, 3, 4, 5, 8, 9];


const newArray = array.map(function(item){ //Percorre e retorna nova info
    return item * 2;
});
console.log(newArray);
const newArray2 = array.map(function(item, index){
    return item + index;
});
console.log(newArray2);


const somaArray = array.reduce(function(total, next){
    return total + next;
});
console.log('Soma do array = ' + somaArray);


const filterArray = array.filter(function(item){
    return item % 2 === 0;
})
console.log(filterArray);


const find = array.find(function(item){
    return item === 4;
});
console.log(find);

////////////////////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTIONS
console.log('----------------------------------------');

const arr = [1, 3, 4, 5, 8, 9];
/*
-----------------------Função anonima
const newArr = arr.map(function(item){ 
    return item * 2;
});
console.log(newArr);

const newArr = arr.map((item) => { 
    return item * 2;
});
console.log(newArr);

Se tem só um parametro pode remover ()
const newArr = arr.map(item => { 
    return item * 2;
});
console.log(newArr);

*/
const newArr = arr.map(item => item * 2);
console.log(newArr);

// const test = function(){
//     return 'teste';
// }
const test = () => 'teste';
console.log(test());


////////////////////////////////////////////////////////////////////////////////////////////////
// VALORES PADRÃO
console.log('----------------------------------------');

const somar = (a = 1, b = 5) => a + b;
console.log(somar(2,2));
console.log(somar(2));
console.log(somar());


////////////////////////////////////////////////////////////////////////////////////////////////
// DESESTRUTURAÇÂO DE OBJS
console.log('----------------------------------------');

const usuario = {
    nome: 'Karlos',
    idade: 65,
    endereco: {
        cidade: 'Goiania',
        estado: 'GO',
    },
};
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*///ou 
const { nome, idade, endereco: { cidade, estado} } = usuario;

console.log(nome + ' tem ' + idade + ' anos, e é de ' + cidade + '-' + estado);

const usuario2 = {
    nome: 'Bruno',
    idade: 32,
    endereco: {
        cidade: 'Goianira',
        estado: 'GO',
    },
};

//const mostraNome = (usuar) => console.log(usuar.nome + ', de ' + usuar.endereco.cidade);

const mostraNome = ({ nome, endereco: { cidade } }) => console.log(nome + ', de ' + cidade);

mostraNome(usuario2);

