/*
///////////// C02 - Orientação a Objetos e MVC
*/

//Orientação a Objetos e MVC

//Classe é onde fica toda a regra de negócio

//Instancia
// O objeto sempre representa a classe

//MVC - Model / View / Controller

//Model - Acessa e manipula os dados
// View - a UI
//Controller - define as regras de negócio e o pode e não pode acontecer

/*
///////////// C03 - Métodos Construtor e Encapsulamento
*/

//parametros são informações que a função ou meptdos precisam para funcionar.

//entre o abrir e fechar as aspas {o que eu devo fazer}

//atributos - palavra reserva this - referencia atributos e métodos

//Processo de Encapsulamento - controla o acesso a um atributo ou método.

// OS tipos comuns de encapsulamento são: public, protected, private.

//Public: todos acessam
//Protected: acessa os atributos da mesma classe e classe pai.
//Private: Acessam somente atributos e métodos da própria classe

//No JS não ocorre isso porem tem uma convensão

//EX:  _displayCalc (com underline é private)

// para controle o acesso entre eles?

// Neste caso para Atribuir ou Recuparar valores dos atributos (get e set)

//getters e setters permitem definir com acessar os valores

//métodos para controle de regra

//metodo construtor automaticamente quando tem uma instancia a uma classe

/*
///////////// C04 - Manipulando o DOM
*/

// DOM Cada elemento do HTML vira um objeto da coleção HTMLDocument

// Para selecionar Elementos por meio de seletores CSS3 usa-se
document.querySelector();

//innerHTML uma prorpiedade que pega o objeto agora coloque essa informações dentro do documento html via js.


//EX:

displayCalcEl.innerHTML = '4567';
dateEl.innerHTML = '29/07/2018';
timeEl.innerHTML = '13:05';

/*
///////////// C05 - Data e Hora
*/

//Date Classe nativa do Javascript para Datas
Date();

dt = new Date();
//consegue visualizar todas as propriedades do Date 
dir(dt);

dt.getDate();
//29

dt.getMonth();
//6

dt.getFullYear();
//2018

dt.toDateString();
"Sun Jul 29 2018"
dt.toLocaleDateString();
"29/07/2018"

dt.toLocaleDateString('pt-br');
"29/07/2018"

dt.toLocaleDateString('pt-br', {month: 'long'});
"julho"

dt.toLocaleDateString('pt-br', {month: 'short'});
"jul"

dt.toLocaleTimeString();
"14:06:59"

calculator.displayDate = new Date().toLocaleDateString('pt-BR');
"29/07/2018"

calculator.displayTime = new Date().toLocaleTimeString('pt-BR');
"14:15:49"

//setInterval

//Função executada em um intervalo de tempo, o tempo é marcado em milesegundos.

Date.toLocaleDateString
// formata a data pelo localização

Date.toLocaleTimeString
// formata a hora pelo localização

/*
///////////// C06 - querySelector
*/

//atribui uma variável que recebe a propriedade querySelector para consultar o seletor #buttons

//se precidar consultar todos os selectores pai e filhos que contem usa-se o querySelectorAll

let buttons = document.querySelector('#buttons');
let buttons = document.querySelectorAll('#buttons > g, #parts > g');

/*
///////////// C07 - Adicionando Evento Click
*/

let buttons = document.querySelectorAll('#buttons > g, #parts > g');

//percorrer todos os botões de acordo com as informações acima
buttons.forEach((btn, index) => {
});

//ao percorrer os botoes, ao clicar pegue apenas as class name e substitua o btn- para fazio, neste caso irá pegar só o numero da classe 4, 5, 7, 8 
console.log(btn.className.baseVal.replace('btn-', ''));


/*
///////////// C08 - Aplicando Vários eventos usando split()
*/



/*
///////////// C09 - Switch
*/