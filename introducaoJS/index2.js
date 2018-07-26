//Function

//São trechos de códigos que podem ser reutilizados.

//class
// várias funções, várias variáveis dentro de um lugar só dentro de uma classe, com atributro e métodos no mesmo lugar.

// return
// encerra a função e retorna um valor.

//Function

// function somar(x1, x2) {
//     return x1 + x2;
//  }

//  let resultado = somar(4, 4);
//  console.log(resultado)

//calc
function calc(x1, x2, operator) {
  return eval(`${x1} ${operator} ${x2}`);
}

let resultado2 = calc(12, 89, "*");
console.log(resultado2);

//usando o eval() função nativa
//eval ele pega uma string e vai executar a função.

//arrow function

//calc se torna uma variável e ela recebe uma arrow function (=>)
let calc = (x1, x2, operator) => {
  return eval(`${x1} ${operator} ${x2}`);
};

let resultado2 = calc(12, 89, "*");
console.log(resultado2);

//DOM

//Eventos
//Ações realizadas na aplicação que dispara rotinas.

window.addEventListener("focus", event => {
  console.log("Focado");
});

document.addEventListener("click", event => {
  console.log("Clicado");
});

//Date.now()
