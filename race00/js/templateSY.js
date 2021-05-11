'use strict'
// Шаблон калькулятора в index.html
const calcTemplateSY = `
<div class="sy"><div style="margin: 0 auto;">
<div class="toggle">Advance: off</div>
<div class="wrap">
    <div class="conteiner" id="">
        <input type="text" name="inp" id="inp" readonly placeholder="0">
        <input type="text" name="out" id="out" readonly placeholder="0">
    </div>
    <div onClick="clr()" class="btn clear">C</div>
    <div onClick="deleted()" class="btn deleted">&#8592;</div>
    <div onClick="insert('+/-')" class="btn">+/-</div>
    <div onClick="insert('*')" class="btn">*</div>
    <div onClick="insert('+')" class="btn">+</div>
    <div onClick="insert('/')" class="btn">/</div>
    <div onClick="insert('%')" class="btn">%</div>
    <div onClick="insert('-')" class="btn">-</div>
    <div onClick="insert('7')" class="btn">7</div>
    <div onClick="insert('8')" class="btn">8</div>
    <div onClick="insert('9')" class="btn">9</div>
    <div onClick="insert('4')" class="btn">4</div>
    <div onClick="insert('5')" class="btn">5</div>
    <div onClick="insert('6')" class="btn">6</div>
    <div onClick="insert('1')" class="btn">1</div>
    <div onClick="insert('2')" class="btn">2</div>
    <div onClick="insert('3')" class="btn">3</div>
    <div onClick="insert('0')" class="btn zero">0</div>
    <div onClick="insert('.')" class="btn dot">.</div>
    <div onClick="sum()" class="btn equal">=</div>
</div>
<div class="advance">
    <div onClick="insert('(')" class="btnAdv">(</div>
    <div onClick="insert(')')" class="btnAdv">)</div>
    <div onClick="insert('π')" class="btnAdv">π</div>
    <div onClick="insert('√(x)')" class="btnAdv">√(x)</div>
    <div onClick="insert('In()')" class="btnAdv">In()</div>
    <div onClick="insert('sin()')" class="btnAdv">sin()</div>
    <div onClick="insert('cos()')" class="btnAdv">cos()</div>
    <div onClick="insert('tan()')" class="btnAdv">tan()</div>
    <div onClick="insert('log()')" class="btnAdv">log()</div>
</div>
</div></div>
`;

// Шаблон дисплея
const displayTemplateSY = `

`;

// Шаблон клавиатуры
const keyboardTemplateSY = `

`;

const templateSY = {
    calc: calcTemplateSY,
    display: displayTemplateSY,
    keyboard: keyboardTemplateSY
}


let inp = document.getElementById("inp");
let out = document.getElementById("out");
let toggle = document.querySelector('.toggle');
let wrap = document.querySelector('.wrap');



//ввід
function insert(num) {
    console.log(num);
    inp.value += num;
    console.log(inp);
    equal();
}
//видаляє по 1
function deleted() {
    inp.value = inp.value.substring(0, inp.value.length - 1);
    equal();
    if (out.value == "undefined") {
        out.value = "";
    }
}
//очищає все
function clr() {
    inp.value = '';
    out.value = '';
}
//показує відповідь при натисканні кнопки дорівнює
function sum() {
    out.style.color = 'black';
    out.style.fontSize = '1em';
    out.style.transition = '0.3s';
    equal();
}
//відразу показує відповідь
function equal() {
    out.value = eval(inp.value);
}
//Enter - для обрахунку
document.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        sum()
    }
});
//перемикач продвинутого режиму
function eventsYS() {
    toggle.addEventListener('click', () => {
        if (toggle.textContent == 'Advance: off') {
            toggle.innerHTML = 'Advance: on'
            wrap.style.marginLeft = '115px';
            toggle.style.backgroundColor = 'green'
        } else {
            toggle.innerHTML = 'Advance: off'
            wrap.style.marginLeft = '0px';
            toggle.style.backgroundColor = 'red'
        }
    })
}