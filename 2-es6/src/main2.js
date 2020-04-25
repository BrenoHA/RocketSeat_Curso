import ClasseUsuario, { idade as idadeUsuario } from './functions';

ClasseUsuario.info(); //Apenas Teste
console.log('idade: ' + idadeUsuario); // idade: 23


/////////////////////////////////////////////////////
console.log('//////////////////////////////');

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);

        } catch (err) {
            console.warn('ERRO NA API');
        }
    }
}

Api.getUserInfo('BrdasdasdenoHA');
Api.getUserInfo('BrenoHA');


/////////////////////////////////////////////////////

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 4000);
});

/*

minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);

            minhaPromise().then(response => {
                console.log(response);
            });
        });
    });

Isso para executar 3 vezes, cascata, mto código
Ent usa o async/await

async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
com arrow functions
*/

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log('-------------------');
}
executaPromise();

//-------------------------------------------------------------------------
//DESAFIOS
//A

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
    await delay(console.log('/-/-/-/-/-/-/-/-/-'));
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));

}
// function umPorSegundo() {
//     delay().then(() => {
//         console.log('1s');
//         delay().then(() => {
//             console.log('2s');
//             delay().then(() => {
//                 console.log('3s');
//             });
//         })
//     });
// }
umPorSegundo();

//B
//import axios from 'axios';

async function getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);

            console.log(response.data);
        } catch (err) {
            console.warn('USUÁRIO NÃO EXISTE');
        }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

//C Já fiz em cima linha: 10 (msm exemplo da aula)

// D

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);

        console.log(response.data);
    } catch (err) {
        console.log("Usuário não existe");
    }
};

buscaUsuario("diego3g");