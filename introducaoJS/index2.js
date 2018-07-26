//Function

//São trechos de códigos que podem ser reutilizados.

//class
// várias funções, várias variáveis dentro de um lugar só dentro de uma classe, com atributro e métodos no mesmo lugar.

// return
// encerra a função e retorna um valor.

//Function

function somar(x1, x2) { 
    return x1 + x2;
 }

 let resultado = somar(4, 4);
 console.log(resultado)


 //calc
 function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`)
 }

 let resultado2 = calc(1, 4, '+');
 console.log(resultado2)

