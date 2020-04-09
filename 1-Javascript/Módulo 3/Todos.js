var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//Se não conseguir retornar valor pq ta vazio, ele no || adiciona um array vazio

// var todos = [
//     'Fazer Café',
//     'Estudar Js',
//     'Pintar'
// ];

function renderTodo(){

    listElement.innerHTML = '';

    for (todo of todos){

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');


        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);

        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

renderTodo();

function addTodo(){

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodo();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodo();
    saveToStorage();

}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));


}