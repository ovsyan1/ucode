class CalcEngineering extends CalcStandart {

    constructor() {
        super();
    }
    // addNumber(el) {
    //     this.isOperation = false;
    //     this.addExp(el);
    //     this.addDisplayText(el);
    //     this.render();
    //     this.push = true;
    // }
    // addOperation(el) {
    //     if(!this.isOperation) {
    //         if(this.push) {
    //             this.stack.push(this.displayText);
    //             this.push = false;
    //         }
    //         this.stack.push(el);
    //     }
    //     this.addExp(el, 'op');
    //     this.addRes();
    //     this.render();
    //     this.isOperation = true;
    // }
    addEngOperation(exp) {

        this.stack[this.stack.length - 1] = exp;
        this.expression = this.stack.join("");
        this.displayText = this.stack[this.stack.length - 1];
        this.addRes();
        this.render();
        this.push = false;

    }
    sin(){
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.sin(this.stack[this.stack.length - 1])));

        }
    }
    cos() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.cos(this.stack[this.stack.length - 1])));
        }
    }
    tan() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.tan(this.stack[this.stack.length - 1])));
        }
    }
    ctan() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(1 / Math.tan(this.stack[this.stack.length - 1])));
        }
    }
    lg() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.log10(this.stack[this.stack.length - 1])));
        }
    }
    ln() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.log(this.stack[this.stack.length - 1])));
        }
    }
    sqrt() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.sqrt(this.stack[this.stack.length - 1])));
        }
    }
    sqr() {
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            this.addEngOperation(parseFloat(Math.pow(this.stack[this.stack.length - 1], 2)));
        }
    }
    pi() {
        this.addNumber(Math.PI)
    }
    e() {
        this.addNumber(Math.E)
    }

    xFact(){
        if(!this.isOperation) {
            if(this.push) {
                this.stack.push(this.displayText);
            }
            let x = this.stack[this.stack.length - 1];
            let res = 1;
            for(let i = 1; i <= x;i++){
                 res *= i
            }
            this.addEngOperation(res);
        }
    }
    xN(){
        this.addOperation('x<sup class="sub-index">n</sup>');
    }
    mm(){
        if(!this.isTransform) {

            if(this.push) {

                this.stack.push(this.displayText);
            }
            this.stack[this.stack.length - 1] = this.stack[this.stack.length - 1] + "mm";
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        } else {
            this.stack[this.stack.length - 1] = this.getMeasure(this.stack[this.stack.length - 1], "mm");
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        }
    }
    cm(){
        if(!this.isTransform) {

            if(this.push) {

                this.stack.push(this.displayText);
            }
            this.stack[this.stack.length - 1] = this.stack[this.stack.length - 1] + "cm";
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        } else {
            this.stack[this.stack.length - 1] = this.getMeasure(this.stack[this.stack.length - 1], "cm");
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        }
    }
    m(){
        if(!this.isTransform) {

            if(this.push) {

                this.stack.push(this.displayText);
            }
            this.stack[this.stack.length - 1] = this.stack[this.stack.length - 1] + "m";
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        } else {
            this.stack[this.stack.length - 1] = this.getMeasure(this.stack[this.stack.length - 1], "m");
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        }
    }
    km(){
        if(!this.isTransform) {

            if(this.push) {

                this.stack.push(this.displayText);
            }
            this.stack[this.stack.length - 1] = this.stack[this.stack.length - 1] + "km";
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        } else {
            this.stack[this.stack.length - 1] = this.getMeasure(this.stack[this.stack.length - 1], "km");
            this.expression = this.stack.join("");
            this.displayText = this.stack[this.stack.length - 1];
            this.addRes();
            this.render();
            this.push = false;

            this.isTransform = true;
            this.isOperation = true;
        }
    }

    getMeasure (str, measure) {
        let num;
        if(new RegExp(/m/).test(str)) {
            console.log(str);
            num = +str.substring(0, str.length - 1); //metr
            console.log(num);
        }
        if(new RegExp(/mm/).test(str)) {
            console.log(str);
            num = +str.substring(0, str.length - 2) / 1000; //metr
            console.log(num);
        }
        if(new RegExp(/cm/).test(str)) {

            num = +str.substring(0, str.length - 2) / 100; //metr
        }
        if(new RegExp(/km/).test(str)) {
            console.log(str);
            num = +str.substring(0, str.length - 2) * 1000; //metr
            console.log(num);
        }
        console.log(num);
        switch (measure) {
            case "mm":
                return num * 1000 + "mm";

            case "cm":
                return num * 100 + "cm";

            case "m":
                return num + "m";

            case "km":
                return num / 1000 + "km";

            default:
                return num / 1000 + "km";

        }

    }
    mr() {

        this.displayText = this.memory;
        this.render();

    }
    mc() {
        this.memory = "";
        document.querySelector(".memory-icon").classList.add("hide");
    }
    mplus() {
        this.equal();
        this.memory = +this.memory + +this.displayText;
        console.log(this.memory);
        document.querySelector(".memory-icon").classList.remove("hide");
    }
    mminus() {
        this.equal();
        this.memory = +this.memory - +this.displayText;
        document.querySelector(".memory-icon").classList.remove("hide");
    }
}