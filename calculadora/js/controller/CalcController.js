class CalcController {
    //métodos para controle de regra
    //metodo construtor automaticamente quando tem uma instancia a uma classe 
    constructor() {
        //atributos - palavra reserva this - referencia atributos e métodos
        //faz com que esses parametros possam ser usados em toda classe.
        //this. sempre faz a referência ao objeto instanciado.
        //dentro do método elas viraram atributos.

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this._operation = []; //array vazio.
        this.initialize();
        this.initButtonsEvents();
    }

    //metodos principal aonde tudo que começar a execução da calculadora.

    initialize() {
        //chamar o método antes do setInterval
        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
    }

    //metodo para adicionar vários eventos
    // vai escutas os eventos, elementos e eventos aonde os eventos ira ser separados e varer com forEach cada evento aonde irá escutas os elementos (buttons)
    addEventListenerAll(elements, events, fn) {
        events.split(' ').forEach(event => {
            //pega o elemento(btn) adiciona o evento click e drag depois a função que pode ser passada e o false, para evitar de acontecer de disparar dois eventos, se adicionou um o outro evento já é cancelado 
            elements.addEventListener(event, fn, false);
       
        });
    }

    //metodo para limpar todos os dígitos
    clearAll() {

    }

    //metodo para limpar todos os dígitos
    cancelEntry() {
        
    }

    setError() {
        this.displayCalc = "Error";
    }

    execBtn(value) {
        switch (value) {
            case 'ca':
            this.clearAll();
            break;

            case 'ce':
            this.cancelEntry();
            break;

            case 'soma':

            break;

            case 'subtracao':
            
            break;

            case 'divisao':
            
            break;

            case 'multiplicacao':
            
            break;

            case 'porcento':
            
            break;

            case 'igual':
            
            break;
            
            default:
                this.setError();
                break;
        }
    }


    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        // passando 2 parametros 
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e=> {
                //ao percorrer os botoes, ao clicar, pegue apenas as classname e substitua o btn- para fazio, neste caso irá pegar só o numero da classe 4, 5, 7, 8, 9
                let textBtn = btn.className.baseVal.replace('btn-','');
                
                //executar a ação deste botão
                this.execBtn();

            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            });
        });


    }

    //metodo criado para sereuado acima.
    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    //getters e setters permitem definir com acessar os valores

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    //get devolve uma informação 
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    //set recebe uma informação (valor) 
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._dataAtual = value;
    }
}