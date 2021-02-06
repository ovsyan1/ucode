let num = prompt('Enter a number from 1 to 4:');

if(num === '1'){
    alert(num * 2 / 'a');// NaN потому что число делится на строку
}else if(num === '2'){
    alert((num - num) / 0);// 0 / 0 NaN
}else if(num === '3'){
    alert(0 * Infinity);//NaN 
}else if (num === '4'){
    alert(num * 40000000 === Infinity);// false потому что не равны они друг другу(бесконечность больше)
}else{
    alert('Wrong input');
}

