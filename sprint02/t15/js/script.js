let b = prompt('Input first range', 1);
let e = prompt('Input last range', 100);

function checkDivision(beginRange, endRange){
    let result = '';
    for(let i = beginRange; i <= endRange;i++){
        if(i % 10 == 0 && i % 3 == 0 && i % 2 == 0){
        result += `${i} is even, a multiple of 3, a multiple of 10`
        }else if(i % 3 == 0){
            result += `${i} is a multiple of 3`
        }else if(i % 2 == 0){
            result += `${i} is even`
        }else result += `${i} - `
        result += '\n'
}
console.log(result);
}
checkDivision(b, e); 