// var myPromise = function(){

//     return new Promise(function(resolve,reject){

//         var xhr = new XMLHttpRequest();

//         xhr.open('GET', 'https://api.github.com/users/BrenoHA');
//         xhr.send(null);
//         //Requisição assincrona então tem que dar ok quando estiver carregado

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {

//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('ERRO NA REQUISIÇÃO....');
//                 }

//             }
//         }


//     });

// }

axios.get('https://api.github.com/users/BrenoHA')
    //then pega o resolve
    .then(function(response) {
        console.log(response);
    })
    //catch pega o reject
    .catch(function(error) {
        console.warn(error);//avisa erro
    });
