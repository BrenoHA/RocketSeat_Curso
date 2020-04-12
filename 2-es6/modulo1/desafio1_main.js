//////////////////////////////////////////////////////////////////////////////////////////////
//1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
    isAdmin() {
        return this.admin === true; // Vai retornar um false pq não foi definido e está fazendo uma comparação
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const user1 = new Usuario('user1@gmail.com', '123456');
const user2 = new Admin('user2@gmail.com.br', '456789');

console.log(`${user1.email} is admin? ${user1.isAdmin()}`);

console.log(`${user2.email} is admin? ${user2.isAdmin()}`);
//////////////////////////////////////////////////////////////////////////////////////////////
//2
console.log('/////////////////////////////////////////');

const usuarios = [
    {//Array de objetos, troquei o primeiro para ver melhor
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
//2.1
const uMap = usuarios.map( arr => arr.idade);
console.log(uMap);
//2.2
const uFilter = usuarios.filter(function(arr){
        return (arr.idade >= 18 && arr.empresa === 'Rocketseat');
})
console.log(uFilter);
//2.3
const uFind = usuarios.find( arr => arr.empresa === 'Google');//Ira retornar undefined como pede o exercício
console.log(uFind);
//2.4

var uModif = usuarios.map(function(arr){
    return ({...arr, idade: arr.idade * 2});
});
console.log(uModif);
uModif = uModif.filter( arr => arr.idade <= 50 );
console.log(uModif);

//Ou
console.log('ou direto:');

const uModif2 = usuarios
    .map(arr => ({...arr, idade: arr.idade * 2}) )
    .filter( arr => arr.idade <= 50 );
// que seria usuarios.map(dasdiuiosajdo).filter(dsksdasajos) tudo junto
    console.log(uModif2);


//////////////////////////////////////////////////////////////////////////////////////////////
//3
console.log('/////////////////////////////////////////');
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

const arr1 = arr.map( item => item + 10 );
console.log(arr1);

// 3.2
// Dica: Utilize uma constante pra function
const uusuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(uusuario) {
//  return uusuario.idade;
// }

const mostraIdade = uusuario => uusuario.idade;
console.log(mostraIdade(uusuario));

// 3.3
// Dica: Utilize uma constante pra function
const nomee = "Diego";
const idadee = 23;
// function mostraUsuario(nomee = 'Diego', idadee = 18) {
//  return { nomee, idadee };
// }

const mostraUsuario = (nomee = 'Diego', idadee = 18) => ({nomee, idadee});

console.log(mostraUsuario(nomee, idadee));
console.log(mostraUsuario(nomee));


// 3.4
/*
const promise = function() {

    return new Promise(function(resolve, reject) {

    return resolve();

    })
}
*/

const promise = () => new Promise(resolve, reject => resolve());
