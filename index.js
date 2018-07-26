var olaMundo = "Eu já sabia!!!";

// console.log(olaMundo);
// console.log(olaMundo);
// console.log(olaMundo);
// console.log(olaMundo);
// console.log(olaMundo);
// console.log(olaMundo);
// console.log(olaMundo);

//var
// declaração de variáveis 

//declaração por escopo
//let
// você pode definir em qual local será usado a variável.

//const
//usado para criar uma variavel constante que nunca será mexida.

// = é um operador der atribuição

// let

let a = 10;
const b = "10";

//console.log(a == b);
// console.log(a === b);

// == Compara o valor apenas

// === Compara o valor e o tipo de dado

// !== Compara se os valores e tipos são diferentes

// != Compara se os valores diferentes

// operadores lógicos

// and &&
console.log(a == b && typeof a == 'string');
// se valor de a é igual a b, e o valor de a é igual a "string" // false

// our || 
console.log(a == b || typeof a == 'string');

let cor = "verde";

if (cor === 'verde') {
    console.log('siga');
} else if (cor === 'amarelo') {
    console.log('atenção');
} else {
    console.log('pare');
}


let cor = 'amarelo';

switch (cor) {
    //caso seja o 'verde'...
    case 'verde':
        // faço isso...
        console.log('siga');
        // pare aqui...
        break;
    
    case 'amarelo':
        console.log('atenção');
        break;
    
    case 'vermelhor':
        console.log('pare');
        break;
    
    default:
        console.log('não sei!');   
}

//atenção
// utilize sempre o comando break;para interromper o bloco

let n = 7;

for (let i = 0; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i*n}`); // template strings
    // console.log( i + ' X ' + n + ' = ' + (i * n));
}
