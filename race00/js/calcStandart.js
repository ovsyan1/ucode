class CalcStandart extends Calc {

    constructor() {
        super();
    }
    addNumber(el) {
        this.isOperation = false;
        this.addExp(el);
        this.addDisplayText(el);
        this.render();
        this.push = true;
    }
    addOperation(el) {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
                this.push = false;
            }
            this.stack.push(el);
        }
        this.addExp(el, 'op');
        this.addRes();
        this.render();
        this.isOperation = true;

        this.hasComa = false;
    }
    clear() {
        if(document.querySelector(".ingener").classList.contains("show")) {
            this.isEngenering = true;
        } else {
            this.isEngenering = false;
        }
        this.init();
        this.render();
    }
    zero(){
        this.addNumber('0');
        
    }
    doubleZero(){
        this.addNumber('00');
    }
    one(){
        this.addNumber('1');
    }
    two(){
        this.addNumber('2');
    }
    three(){
        this.addNumber('3');
    }
    four(){
        this.addNumber('4');
    }
    five(){
        this.addNumber('5');
    }
    six(){
        this.addNumber('6');
    }
    seven() {
        this.addNumber('7');
    }
    eight(){
        this.addNumber('8');
    }
    nine(){
        this.addNumber('9');
    }
    add() {
        this.addOperation('+');
    }
    minus(){
        this.addOperation('-');
    }
    multiply(){
        this.addOperation('*');
    }
    division(){
        this.addOperation('/');
    }
    sign(){
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.stack[this.stack.length - 1] = this.stack[this.stack.length - 1] * -1;
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;
        }

        // this.addOperation('%');
    }
    percent(){
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.stack[this.stack.length - 1] = this.stack[this.stack.length - 1] / 100;
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;
        }

        // this.addOperation('%');
    }
    equal() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.getResult();
            this.render();
            this.isOperation = true;
        }

    }
    comma(){
        if(!this.hasComa) {
            this.addExp('.');
            this.addDisplayText('.');
            this.render();
            this.hasComa = true;
        }

    }

}
