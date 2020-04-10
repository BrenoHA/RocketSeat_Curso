"use strict";

var array = [1, 3, 4, 5, 8, 9];
var newArray = array.map(function (item) {
  //Percorre e retorna nova info
  return item * 2;
});
console.log(newArray);
var newArray2 = array.map(function (item, index) {
  return item + index;
});
console.log(newArray2);
var somaArray = array.reduce(function (total, next) {
  return total + next;
});
console.log('Soma do array = ' + somaArray);
var filterArray = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterArray);
var find = array.find(function (item) {
  return item === 4;
});
console.log(find); ////////////////////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTIONS

console.log('----------------------------------------');
var arr = [1, 3, 4, 5, 8, 9];
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

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // const test = function(){
//     return 'teste';
// }

var test = function test() {
  return 'teste';
};

console.log(test()); ////////////////////////////////////////////////////////////////////////////////////////////////
// VALORES PADRÃO

console.log('----------------------------------------');

var somar = function somar() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a + b;
};

console.log(somar(2, 2));
console.log(somar(2));
console.log(somar()); ////////////////////////////////////////////////////////////////////////////////////////////////
// DESESTRUTURAÇÂO DE OBJS

console.log('----------------------------------------');
var usuario = {
  nome: 'Karlos',
  idade: 65,
  endereco: {
    cidade: 'Goiania',
    estado: 'GO'
  }
};
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/
//ou 

var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    estado = _usuario$endereco.estado;
console.log(nome + ' tem ' + idade + ' anos, e é de ' + cidade + '-' + estado);
var usuario2 = {
  nome: 'Bruno',
  idade: 32,
  endereco: {
    cidade: 'Goianira',
    estado: 'GO'
  }
}; //const mostraNome = (usuar) => console.log(usuar.nome + ', de ' + usuar.endereco.cidade);

var mostraNome = function mostraNome(_ref) {
  var nome = _ref.nome,
      cidade = _ref.endereco.cidade;
  return console.log(nome + ', de ' + cidade);
};

mostraNome(usuario2);
