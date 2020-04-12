"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//////////////////////////////////////////////////////////////////////////////////////////////
//4.1
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC 
//4.2
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
//    }
// console.log( mostraInfo({ nome: 'Diego', idade: 23 }) );

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: "Diego",
  idade: 23
})); //////////////////////////////////////////////////////////////////////////////////////////////
//5.1

console.log('/////////////////////////////////////////');
var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]

function soma() {
  for (var _len = arguments.length, itens = new Array(_len), _key = 0; _key < _len; _key++) {
    itens[_key] = arguments[_key];
  }

  return itens.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21

console.log(soma(1, 2)); // 3
//5.2

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

console.log(usuario2);

var usuario3 = _objectSpread({}, usuario, {
  endereco: _objectSpread({}, usuario.endereco, {
    cidade: 'Lontras'
  })
});

console.log(usuario3); //////////////////////////////////////////////////////////////////////////////////////////////
//6

console.log('/////////////////////////////////////////');
var uusuario = 'Diego';
var idade = 23;
console.log('O usuário ' + uusuario + ' possui ' + idade + ' anos');
console.log("O usu\xE1rio ".concat(uusuario, " possui ").concat(idade, " anos")); //////////////////////////////////////////////////////////////////////////////////////////////
//7

console.log('/////////////////////////////////////////');
var nomee = 'Diego';
var idadee = 23;
var usuarioo = {
  nomee: nomee,
  idadee: idadee,
  cidadee: 'Rio do Sul'
};
console.log("".concat(uusuario, " tem ").concat(idade, " anos, o usu\xE1rio possui o nome ").concat(usuarioo.nomee, ", e tem ").concat(usuarioo.idadee, " e \xE9 da cidade ").concat(usuarioo.cidadee));
