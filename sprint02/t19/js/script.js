// let str = prompt()
let regural_brack = new RegExp("[(|)]")
let len = str.length
let a = 0
let b = 0

function checkBrackets(str) {
    if (!str || !regural_brack.test(str)) {
        return -1
    } 
    for (let i = 0; i < len; i++) 
    if (str[i] == "(" ) {
        a++
    } else if (str[i] == ")" ) {
        b++
    } 
    let res = a - b 
    if (res < 0 ) {
        res *= -1
    }
    return res
}

console.log(checkBrackets(str))