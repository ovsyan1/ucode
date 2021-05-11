'use strict'
// Шаблон калькулятора в index.html
const calcTemplateOK = `
<div class="switch-box">
    <div class="switch">
        <input type="checkbox" class="checkbox">
        
    </div>
    <div class="night-box">
            <div class="night"><div>
                   &#9789;
    </div>    
</div>
    </div>
    </div>
    <div class="container">
      <div class="ingener hide"></div>
    <div class="box">
      <div class="text" id="display">
      
      </div>
      <div class="keyboard" id="keyboard"></div>
    </div>
    </div>
`;

// Шаблон дисплея
const displayTemplateOK = `

<div class="display__inner">
    <div class="row between">
        <div class="display__icons">
            <span class="memory-icon" id="memory">M</span>
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
const keyboardTemplateOK = `
<div class="calc-key circle #CLASSES#" id="#ID#" data-handler="#HANDLER#">#NAME#</div>
`;

//Шаблон инженерного калькулятора
const ingenerKeyboardTemplateOK = `
<div class="calc-key circle #CLASSES#" id="#ID#" data-handler="#HANDLER#">#NAME#</div>
`;


const templateOK = {
    calc: calcTemplateOK,
    display: displayTemplateOK,
    keyboard: keyboardTemplateOK,
    ingenerKeyboard: ingenerKeyboardTemplateOK
}

function eventsOK() {
    let body = document.querySelector("body"),
        textArea = document.querySelector(".text"),
        circles = document.querySelectorAll(".circle");

    document.querySelector(".night").addEventListener("click", () => {
        if (body.classList.contains("t-dark")) {
            body.classList.remove("t-dark");
            body.classList.add("t-white");
        } else {
            body.classList.remove("t-white");
            body.classList.add("t-dark");
        }
    });

    // Вывод ижинерного калка
    let resultIngener = "";
    function renderIngener() {
        for (let k = 0; k < data.types.engineering.length; k++) {
            resultIngener += `<div class="calc-key circle" data-handler="${data.types.engineering[k].handler}">${data.types.engineering[k].name}</div>`;
        }
         //console.log(data.types.engineering[0].name)
        return resultIngener
    }


    renderIngener();
    let ingener = document.querySelector(".ingener")
    ingener.innerHTML += resultIngener;
    document.querySelector('.checkbox').addEventListener('click', () => {
        if(ingener.classList.contains('hide')){
            ingener.classList.remove('hide')
            ingener.classList.add('show');
            // this.isEngenering = true;
        }else{
            ingener.classList.remove('show')
            ingener.classList.add('hide');
            // this.isEngenering = false;
        }

    })
}