"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//////////////////////////////////////////////////////////////////////////////////////////////
//1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true; // Vai retornar um false pq não foi definido e está fazendo uma comparação
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this, email, senha);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var user1 = new Usuario('user1@gmail.com', '123456');
var user2 = new Admin('user2@gmail.com.br', '456789');
console.log("".concat(user1.email, " is admin? ").concat(user1.isAdmin()));
console.log("".concat(user2.email, " is admin? ").concat(user2.isAdmin())); //////////////////////////////////////////////////////////////////////////////////////////////
//2

console.log('/////////////////////////////////////////');
var usuarios = [{
  //Array de objetos, troquei o primeiro para ver melhor
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1

var uMap = usuarios.map(function (arr) {
  return arr.idade;
});
console.log(uMap); //2.2

var uFilter = usuarios.filter(function (arr) {
  return arr.idade >= 18 && arr.empresa === 'Rocketseat';
});
console.log(uFilter); //2.3

var uFind = usuarios.find(function (arr) {
  return arr.empresa === 'Google';
}); //Ira retornar undefined como pede o exercício

console.log(uFind); //2.4

var uModif = usuarios.map(function (arr) {
  return _objectSpread({}, arr, {
    idade: arr.idade * 2
  });
});
console.log(uModif);
uModif = uModif.filter(function (arr) {
  return arr.idade <= 50;
});
console.log(uModif); //Ou

console.log('ou direto:');
var uModif2 = usuarios.map(function (arr) {
  return _objectSpread({}, arr, {
    idade: arr.idade * 2
  });
}).filter(function (arr) {
  return arr.idade <= 50;
}); // que seria usuarios.map(dasdiuiosajdo).filter(dsksdasajos) tudo junto

console.log(uModif2); //////////////////////////////////////////////////////////////////////////////////////////////
//3

console.log('/////////////////////////////////////////'); // 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
var arr1 = arr.map(function (item) {
  return item + 10;
});
console.log(arr1); // 3.2
// Dica: Utilize uma constante pra function

var uusuario = {
  nome: 'Diego',
  idade: 23
}; // function mostraIdade(uusuario) {
//  return uusuario.idade;
// }

var mostraIdade = function mostraIdade(uusuario) {
  return uusuario.idade;
};

console.log(mostraIdade(uusuario)); // 3.3
// Dica: Utilize uma constante pra function

var nomee = "Diego";
var idadee = 23; // function mostraUsuario(nomee = 'Diego', idadee = 18) {
//  return { nomee, idadee };
// }

var mostraUsuario = function mostraUsuario() {
  var nomee = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idadee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nomee: nomee,
    idadee: idadee
  };
};

console.log(mostraUsuario(nomee, idadee));
console.log(mostraUsuario(nomee)); // 3.4

/*
const promise = function() {

    return new Promise(function(resolve, reject) {

    return resolve();

    })
}
*/

var promise = function promise() {
  return new Promise(resolve, function (reject) {
    return resolve();
  });
};
