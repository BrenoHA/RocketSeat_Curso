////////////////////////////////////////////////////////////////////////////////////////
//REST
const usuario = {
    nome: 'Breno',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);
console.log('----------------');


const arr = [ 1, 2, 3, 4, 5, 6];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log('----------------');


// function soma( a, b) {
//     return a + b;
// }
// console.log(soma(1,3));

// function soma(a, b,...params){
//     return params;
// }//Só Retorna um arr com = [2, 5, 1, 2]
// console.log(soma(1, 4, 2, 5, 1, 2));

function soma(...params){
    return params.reduce((total, next) => total + next);
}// .reduce com arrow function para somar elementos do array
console.log(soma(1, 4, 2, 5, 1, 2));


////////////////////////////////////////////////////////////////////////////////////////
//SPREAD ( propaga / espalha)
console.log('//////////////////////////////');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log('----------------');


const user1 = {
    nome: 'Breno',
    idade: 23,
    empresa: 'Rocketseat'
}

const user2 = {...user1, nome: 'Vitor' };
console.log(user2);

////////////////////////////////////////////////////////////////////////////////////////
//Template Literals
console.log('//////////////////////////////');

const name = 'Breno';
const age = 19;

console.log( 'My name is ' + name + ' e tenho ' + age + 'anos' );
//Entre Crases
console.log(`My name is ${nome} e tenho ${age} anos`);


////////////////////////////////////////////////////////////////////////////////////////
//Object Short Syntax
console.log('//////////////////////////////');

//Usando o name e age acima. Não precisa----- name: name, age: age,
const usuarioo = {
    name,
    age,
    cidade: 'Gyn'
};
console.log(usuarioo);