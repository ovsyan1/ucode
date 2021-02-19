class Calculator{
    constructor(){
        this.result = 0
    }
    init(num){
        this.result = num
        return this
    }
    add(num){
        this.result += num
        return this
    }
    sub(num){
        this.result -= num
        return this
    }
    mul(num){
        this.result *= num
        return this
    }
    div(num){
        this.result /= num
        return this
    }
    alert(){
       setTimeout(() => {alert(calc.result)}, 5000)  //для того чтобы выподало окно через 5 сек
    }
}


const calc = new Calculator();

console.log(
    calc
         .init(2)
          .add(2)
         .mul(3)
         .div(4)
         .sub(2).result // 1
);

 calc.alert();