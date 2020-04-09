class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }

}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Diego';
        
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}
////////////////////////////
//Class com método estático
class math{
    static soma(a,b){
        console.log(a+b);
    }                         //Se chamar algum método que tenha this.Algo da classe não funciona na static
}
//Não precisa instanciar classe
math.soma(1,2);
////////////////////////////

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novoo Todo');
}

MinhaLista.mostraUsuario();


////////////////////////////////////////////////////
//CONST E LET, tem o mesmo escopo

const a = 1;
//Não pode, a = 3; (READ ONLY)

//Pode fazer mutação, NÂO PODE REATRIBUIR
const user = { nome: 'Breno' };
//Não pode, user = { nome: a};
user.nome = 'Andrade';
console.log(user.nome);

if(5 > 4){
    let c = 555;
    //Aqui roda 
    console.log(c);
}
//Aqui não console.log(c);


