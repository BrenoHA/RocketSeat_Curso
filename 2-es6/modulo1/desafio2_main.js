//////////////////////////////////////////////////////////////////////////////////////////////
//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade, estado } } = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC 

//4.2
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
//    }

// console.log( mostraInfo({ nome: 'Diego', idade: 23 }) );

function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: "Diego", idade: 23 }));

//////////////////////////////////////////////////////////////////////////////////////////////
//5.1
console.log('/////////////////////////////////////////');

const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...itens){
    return itens.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
console.log(usuario2);
const usuario3 = {...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras'} };
console.log(usuario3);

//////////////////////////////////////////////////////////////////////////////////////////////
//6
console.log('/////////////////////////////////////////');

const uusuario = 'Diego';
const idade = 23;
console.log('O usuário ' + uusuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${uusuario} possui ${idade} anos`);


//////////////////////////////////////////////////////////////////////////////////////////////
//7
console.log('/////////////////////////////////////////');

const nomee = 'Diego';
const idadee = 23;
const usuarioo = {
 nomee,
 idadee,
 cidadee: 'Rio do Sul',
};

console.log(`${uusuario} tem ${idade} anos, o usuário possui o nome ${usuarioo.nomee}, e tem ${usuarioo.idadee} e é da cidade ${usuarioo.cidadee}`);
