"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

////////////////////////////////////////////////////////////////////////////////////////
//REST
var usuario = {
  nome: 'Breno',
  idade: 23,
  empresa: 'Rocketseat'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto);
console.log('----------------');
var arr = [1, 2, 3, 4, 5, 6];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);
console.log('----------------'); // function soma( a, b) {
//     return a + b;
// }
// console.log(soma(1,3));
// function soma(a, b,...params){
//     return params;
// }//Só Retorna um arr com = [2, 5, 1, 2]
// console.log(soma(1, 4, 2, 5, 1, 2));

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
} // .reduce com arrow function para somar elementos do array


console.log(soma(1, 4, 2, 5, 1, 2)); ////////////////////////////////////////////////////////////////////////////////////////
//SPREAD ( propaga / espalha)

console.log('//////////////////////////////');
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
console.log('----------------');
var user1 = {
  nome: 'Breno',
  idade: 23,
  empresa: 'Rocketseat'
};

var user2 = _objectSpread({}, user1, {
  nome: 'Vitor'
});

console.log(user2); ////////////////////////////////////////////////////////////////////////////////////////
//Template Literals

console.log('//////////////////////////////');
var name = 'Breno';
var age = 19;
console.log('My name is ' + name + ' e tenho ' + age + 'anos'); //Entre Crases

console.log("My name is ".concat(nome, " e tenho ").concat(age, " anos")); ////////////////////////////////////////////////////////////////////////////////////////
//Object Short Syntax

console.log('//////////////////////////////'); //Usando o name e age acima. Não precisa----- name: name, age: age,

var usuarioo = {
  name: name,
  age: age,
  cidade: 'Gyn'
};
console.log(usuarioo);
