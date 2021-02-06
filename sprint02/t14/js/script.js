function total(addCount, addPrice, currentTotal = 0){
let number = (addCount * addPrice) + currentTotal;//количество товаров * на цену товара и + общая сумма всех покупок
   number = number.toFixed(2);//оставляет две цифры после точки
   return Number(number);
}


let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum);