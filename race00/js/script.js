'use strict'

let data = {
    types: { simple: simple, engineering: engineering },
    themes: ['white', 'dark'],
    theme: 0,
    type: 'standart',
    templates: templates,
    skin: firstSkin,

}

let calc = new Calculator(data);
// calc.display.render();
calc.log();

//
//
//
// function render() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name == "0") {
//       result += `<div class="circle" id="zero-item">${arr[i].name}</div>`;
//     } else if (typeof arr[i].name == "number") {
//       result += `<div class="circle">${arr[i].name}</div>`;
//     } else {
//       result += `<div class="circle" id="not-number">${arr[i].name}</div>`;
//     }
//   }
//   return result;
// }


