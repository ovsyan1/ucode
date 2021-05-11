class Calc {
    _init;
    templates; // Шаблоны видов
    template; // Текущий шаблон
    skin; // OK SY SV
    isOperation = true; // Признак операции с числами
    switcher; // Шаблон переключателя скинов
    result = 0; // Текущий результат вычислений
    displayText = '0'; //Отображение на дисплее
    isDisplayText = false; //
    history; // История выражений
    expression = ''; // Строка формирования выражения
    newExpression = true;
    memory = 0; // Результат памяти калькулятора
    keys; // Map клаввиш - id: {}
    types;
    themes;
    type; // Текущий тип калькулятора
    theme; // Текущая тема калькулятора
    stack = []; // Массив чисел и операций в последовательности ввода
    push = true;
    isEngenering = false;
    isTransform = false;
    memory = "";
    hasComa = false;

    // set expression(value){
    //      value.toFixed(6)
    // }
    // set displayText(value){
    //     return value.toFixed(6)
    // }
    calculator = {
        _render: null,
        _template: "",
        render() {
            this._render(this);
        },
        init(render, template) {
            this._render = render;
            this._template = template;
            return this;
        },
    }

    keyboard = {
        _render: null,
        _template: "",
        _simple: null,
        _engineering: null,
        render() {
            this._render(this);
        },
        init(render, template) {
            this._render = render;
            this._template = template;
            // console.log(this._template);
            // this._template.html = this._template.htmlEng + this._template.html;
            return this;
        },
    }

    display = {//Объект отображения на экран со свойствами и методами
        _render: null,
        _template: "",
        _expression: "",
        _text: "0",
        _memoryon: false,
        _historyon: false,
        // template(value) {
        //     this._template = value;
        //     console.log(value);
        //     return this;
        // },
        expression(value) {
            if(value.length > 7 && value.includes(".")){
                this._expression = value.substr(0, value.indexOf(".") + 7);
            return this;
            }
            this._expression = value;
            return this;
        },
        text(value) {
            if(typeof(value) === 'number') {
                if(value.toString().length > 7){
                    this._text = value.toFixed(7);
                    return this;
                }
                this._text = value;
                return this;
            } else {
                if(value.length > 7){
                    //    this._text = value.substr(0, value.indexOf(".") + 5);

                            this._text = value.substr(0, value.indexOf(".") + 7);
                            return this;
                        }
            this._text = value;
            return this;
            }
            this._text = value;
            return this;
        },
        memoryOn(value) {
            value ? this._memoryon = true : this._memoryon = false;
            return this;
        },
        historyOn(value) {
            value ? this._historyon = true : this._historyon = false;
            return this;
        },
        render() {
            this._render(this);
            if(this._memoryon) {
                document.querySelector("#memory").classList.remove("hide");
            } else {
                document.querySelector("#memory").classList.add("hide");
            }
        },
        init(render, template) {
            this._render = render;
            this._template = template;

            return this;
        },
    };

    constructor() {

    }

    init(skin = "OK") {
        this.hasComa = false;
        if(this.memory) {
            this.display._memoryon = true;
        } else {
            this.display._memoryon = false;
        }
        this.expression = '';
        this.stack = [];
        this.push = true;
        this.isOperation = true;
        this.result = 0;
        this.displayText = '0';
        this.isDisplayText = false;
        this.isTransform = false;
        //this.templates['template' + this.skin].calculator.html = this.switcher + this.templates['template' + this.skin].calculator.html;
        this.calculator.init(this.renderTemplate, this.templates['template' + this.skin].calculator).render();
        this.display.init(this.renderTemplate, this.templates['template' + this.skin].display).render();
        this.calculator._simple = this.types.simple;
        this.calculator._engineering = this.types.engineering;
        this.keyboard.init(this.renderTemplate, this.templates['template' + this.skin].keyboard).render();
        document.querySelector(`#${skin}`).classList.add('active');
        document.querySelectorAll('.skin-switcher').forEach(item => item.addEventListener('click',(e) => this.switchSkin(e)));



        if(this.skin === 'YS') {
            eventsYS();
        }
        if(this.skin === 'OK') {
            eventsOK();
        }

        this.keyEventListener();
        if(this.isEngenering) {
            document.querySelector(".ingener").classList.remove('hide');
            document.querySelector('.switch .checkbox').setAttribute('checked', true);
        }
        // if(this.memory) {
        //     alert('hide');
        //     console.log(document.querySelector(".memory-icon"));
        //     document.querySelector("#memory").classList.remove("hide");
        // }
    }

    renderTemplate(obj) {
        let result = obj._template.html;
        obj._template.html.match(/#[A-Z]*#/g)?.map(item => {
            result = result.replace(item, obj['_' + item.substr(1, item.length - 2).toLowerCase()]);
        });
        document.querySelector(obj._template.selector).innerHTML = result;
    }

    render() {
        this.display.expression(this.expression);
        this.display.text(this.displayText);
        // alert('render');
        this.display.render();
    }

    switchSkin(e) {
        this.skin = e.target.id;
        console.log(this.skin);
        this.init(this.skin);
    }

    keyEventListener() {
        console.log(this.templates.keysClass);
        document.querySelectorAll(`.${this.templates.keysClass}`).forEach(item => {
            if(item.dataset["handler"]) {
                item.addEventListener('click', () => this[item.dataset["handler"]]());
            }
        });
    }

    addExp(el, type = 'num'){
        if(type === 'op' && !this.isOperation || type === 'num') {
            if(this.newExpression) {
                this.expression = '' + el;
                this.newExpression = false;
            } else {
                this.expression = this.expression + el;
            }
        }
        console.log(this.stack);
        // this.addRes()
    }
    addRes(){
        this.isDisplayText = true;
        //this.result = el;
    }
    addDisplayText(el) {
        if(this.displayText === '0' || this.isDisplayText) {
            this.displayText = el;
            this.isDisplayText = false;
        } else {
            this.displayText = this.displayText + el;
        }
    }
    getResult() {
        //this.result = eval(this.expression);
        this.result = this.calculate();
        this.displayText = this.result;
        this.newExpression = true;
        this.isDisplayText = true;
        this.isOperation = false;
    }

    calculate() {
        let result = false;
        let newArr = [];
        let index;
        do {
            // debugger;
            newArr = [];
            result = false;
            if(this.stack.includes('x<sup class="sub-index">n</sup>') && !result) {
                index = this.stack.indexOf('x<sup class="sub-index">n</sup>');
                result = Math.pow(this.stack[this.stack.indexOf('x<sup class="sub-index">n</sup>') - 1], this.stack[this.stack.indexOf('x<sup class="sub-index">n</sup>') + 1]);

                this.stack.forEach((item, key) => {
                    if(!(key == index - 1 || key == index + 1 )) {
                        if(key == index) {
                            newArr.push(result);
                        } else {
                            newArr.push(item);
                        }
                    }
                });
                result = true;
                this.stack = newArr;
            }
            if(this.stack.includes("*") && !result) {
                index = this.stack.indexOf("*");
                result = this.stack[this.stack.indexOf("*") - 1] * this.stack[this.stack.indexOf("*") + 1];

                this.stack.forEach((item, key) => {
                    if(!(key == index - 1 || key == index + 1 )) {
                        if(key == index) {
                            newArr.push(result);
                        } else {
                            newArr.push(item);
                        }
                    }
                });
                result = true;
                this.stack = newArr;
            }
            if(this.stack.includes("/") && !result) {
                index = this.stack.indexOf("/");
                result = +this.stack[this.stack.indexOf("/") - 1] / +this.stack[this.stack.indexOf("/") + 1];
                this.stack.forEach((item, key) => {
                    if(!(key == index - 1 || key == index + 1 )) {
                        if(key == index) {
                            newArr.push(result);
                        } else {
                            newArr.push(item);
                        }
                    }
                });
                result = true;
                this.stack = newArr;
            }
            if(this.stack.includes("+") && !result) {
                index = this.stack.indexOf("+");
                result = +this.stack[this.stack.indexOf("+") - 1] + +this.stack[this.stack.indexOf("+") + 1];

                this.stack.forEach((item, key) => {
                    if(!(key == index - 1 || key == index + 1 )) {
                        if(key == index) {
                            newArr.push(result);
                        } else {
                            newArr.push(item);
                        }
                    }
                });
                result = true;
                this.stack = newArr;
            }
            if(this.stack.includes("-") && !result) {
                index = this.stack.indexOf("-");
                result = +this.stack[this.stack.indexOf("-") - 1] - +this.stack[this.stack.indexOf("-") + 1];

                this.stack.forEach((item, key) => {
                    if(!(key == index - 1 || key == index + 1 )) {
                        if(key == index) {
                            newArr.push(result);
                        } else {
                            newArr.push(item);
                        }
                    }
                });
                result = true;
                this.stack = newArr;
            }
         } while(result);

        return this.stack;
    }

}
