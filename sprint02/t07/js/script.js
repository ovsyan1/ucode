function getAnswer(question, wrongAnswer, correctAnswer){
    return(`${question}\nwrong:${wrongAnswer}\ncorrect:${correctAnswer}\n\n`);
}
const a = '15';
const b = 4;
const c = true;
const d = 'a';
const e = 'B';
const f = '';
let answer = 'Not my type\n\n';
answer += getAnswer('a+b=?', a + b,+a + b);//добавил унарные оператор + перед string, еще можно использовать метод toString
answer += getAnswer('a+c=?', a + c, Boolean(a) + c);//когда строку перевеодишьв булевый тип ,он превращается в 2 
answer += getAnswer('e+d+e+d=?', e + d + e + d, e + d + +e + d);//строковому тип преобразовуешь в числовой и получается NaN
answer += getAnswer('c+f=?', c + f, String(+c) + Number(Boolean(f)));
alert(answer);

/* The web page must display:
Not my type

a+b=?
wrong: 154
correct: 19

a+c=?
wrong: 15true
correct: 2

e+d+e+d=?
wrong: BaBa
correct: BaNaNa

c+f=?
wrong: true
correct: 10
*/