/ this is a js file
// Luiza Orquiz

// exercicio 1 a:
/*
SUBA NUM ONUBUS EM MARROCOS
let numero = Number(27 caracteres);
*/

// exercicio 1 = b
/*
let nome; 
let email;
nome = prompt("qual seu nome");
email = prompt("qual seu email");
console.log(" O eamil", email, " foi cadrasto com successo.  seja bem vindo", nome);

// exercicio 2 
const listadecompras = [" batata frita", "strogonoffe", "lasanha de carne", " figado com cebola", "farofa"]
let comidas = listadecompras;
console.log("Essas sao minhas comidas preferidas");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

let comida; 
comidas[1]=prompt("Qual sua comida favorita");
console.log(comidas);
*/

// exercicio 3 
const  listadeTarefas = []
listadeTarefas.push(prompt("qual sua primeira tarefas"));
listadeTarefas.push(prompt("qual sua segunda tarefas"));
listadeTarefas.push(prompt("qual sua terceira tarefas"));

console.log("0 - ", listadeTarefas[0]);
console.log("1 - " , listadeTarefas[1]);
console.log("2  - ", listadeTarefas[2]);

let  completo = Number(prompt("qual a tarefas que se realizou"));
listadeTarefas.splice(completo, 1);
console.log(listadeTarefas);



















