'use strict'
// Шаблон калькулятора в index.html
const calcTemplateSV = `
<div class="container">
    <h1>Calculator</h1>
    <div class="row">
        <div class="type_switch">
            <input type="checkbox" class="checkbox">
        </div>
        <div class="theme_switch">
            Q
        </div>
    </div>
    <div class="calc">
        <div class="calc__display">
            <div class="calc__display_render" id="display">
                0
            </div>
        </div>
        <div class="calc__keyboard" id="keyboard">

        </div>
    </div>
</div>
`;

// Шаблон дисплея
const displayTemplateSV = `
<div class="display__inner">
    <div class="row between">
        <div class="display__icons">
            <span>M</span>
            <span>H</span>
        </div>
        <div class="display__expression right">
            <span>#EXPRESSION#</span>
        </div>
    </div>
    <div class="row right">
        <span>#TEXT#</span>
    </div>
</div>
`;

// Шаблон клавиатуры
const keyboardTemplateSV = `

`;

const templateSV = {
    calc: calcTemplateSV,
    display: displayTemplateSV,
    keyboard: keyboardTemplateSV
}