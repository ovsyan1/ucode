'use strict'

// Шаблон переключателя скинов
const switcher = `
<div class="switch-skins hide">
    <div class="skin-title">Skins </div>
    <div class="skin-switcher" id="OK"></div>
    <div class="skin-switcher" id="SY"></div>
    <div class="skin-switcher" id="SV"></div>
</div>`;
let firstSkin = "OK"; // Первый скин по-умолчанию
let keysClass = "calc-key"; // Класс кнопок калькулятора, на которые назначаются слушатели событий

// Кнопки стандартного калькулятора
const simple = [
  {
    id: "key-clear",
    name: "C",
    handler: "clear",
    classes: "not-number"
  },
  {
    id: "key-sign",
    name: "&#177;",
    handler: "sign",
    classes: "not-number"
  },
  {
    id: "key-percent",
    name: "%",
    handler: "percent",
    classes: "not-number"
  },
  {
    id: '_division',
    name: "/",
    handler: 'division',
    classes: "not-number"
  },
  {
    id: '_seven',
    name: '7',
    handler: 'seven'
  },
  {
    id: '_eight',
    name: '8',
    handler: 'eight'
  },
  {
    id: '_nine',
    name: '9',
    handler: 'nine'
  },
  {
    id: '_multiply',
    name: "*",
    handler: 'multiply',
    classes: "not-number"
  },
  {
    id: '_four',
    name: '4',
    handler: 'four'
  },
  {
    id: '_five',
    name: '5',
    handler: 'five'
  },
  {
    id: '_six',
    name: '6',
    handler: 'six'
  },
  {
    id: '_minus',
    name: "-",
    handler:'minus',
    classes: "not-number"
  },
  {
    id: '_one',
    name: '1',
    handler: 'one'
  },
  {
    id: '_two',
    name: '2',
    handler: 'two'
  },
  {
    id: '_three',
    name: '3',
    handler: 'three'
  },
  {
    id: '_add',
    name: "+",
    handler: "add",
    classes: "not-number"
  },
  {
    id: '_zero',
    name: '0',
    handler: "zero"
  },
  {
    id: '_double-zero',
    name: '00',
    handler: 'doubleZero'
  },
  {
    id: '_comma',
    name: ".",
    handler: 'comma'
  },
  {
    id: '_equal',
    name: "=",
    handler: 'equal',
    classes: "not-number"
  },
];

// Кнопки инженерного калькулятора
const engineering = [
  {
    name: 'sin',
    handler: 'sin'
  },
  {
    name: 'cos',
    handler: 'cos'
  },
  {
     name: 'tan',
     handler: 'tan'
  },
  {
    name: 'ctan',
    handler: 'ctan'
  },
  {
    name: 'lg',
    handler: 'lg'
  },
  {
    name: 'ln',
    handler: 'ln'
  },
  {
    name: 'sqrt',
    handler: 'sqrt'
  },
  {
    name: 'sqr',
    handler: 'sqr'
  },
  {
    name: 'pi',
    handler: 'pi'
  },
  {
    name: 'e',
    handler: 'e'
  },
  {
    name: 'x!',
    handler: 'xFact'
  },
  {
    name: 'x<sup class="sub-index">n</sup>',
    handler: 'xN'
  },
  {
    name: 'mm',
    handler: 'mm'
  },
  {
    name: 'cm',
    handler: 'cm'
  },
  {
    name: 'm',
    handler: 'm'
  },
  {
    name: 'km',
    handler: 'km'
  },
  {
    name: 'MR',
    handler: 'mr'
  },
  {
    name: 'MC',
    handler: 'mc'
  },
  {
    name: 'M+',
    handler: 'mplus'
  },
  {
    name: 'M-',
    handler: 'mminus'
  },
];

// Подключение шаблонов калькулятора
const templates = {
    templateOK: {
    'calculator' : {
      selector: "#calculator",
      html: switcher + templateOK.calc
    },
    'display': {
      selector: "#display",
      html: templateOK.display
    },
    'keyboard': {
      selector: "#keyboard",
      html: getTemplateKeyboard(templateOK.keyboard, simple),
      htmlEng: getTemplateKeyboard(templateOK.keyboard, engineering)
    },
  },
    templateSV: {
    'calculator': {
      selector: "#calculator",
      html: switcher + templateSV.calc
    },
    'display': {
      selector: "#display",
      html: templateSV.display
    },
    'keyboard': {
      selector: "#keyboard",
      html: getTemplateKeyboard(templateSV.keyboard, simple),
      htmlEng: getTemplateKeyboard(templateSV.keyboard, engineering)
    },
  },
    templateSY: {
      'calculator': {
        selector: "#calculator",
        html: switcher + templateSY.calc
      },
      'display': {
        selector: "#display",
        html: templateSY.display
      },
      'keyboard': {
        selector: "#keyboard",
        html: getTemplateKeyboard(templateSY.keyboard, simple),
        htmlEng: getTemplateKeyboard(templateSY.keyboard, engineering)
      },
    },
    keysClass: keysClass,
  }


// Создание шаблона клавиатуры
function getTemplateKeyboard(template, arrKeys) {
  let keyboardTemplate = '';
  arrKeys.map(item => {
    let res = template;
    res = res.replace('#ID#', item.id);
    res = res.replace('#HANDLER#', item.handler);
    res = res.replace('#NAME#', item.name);
    res = res.replace('#CLASSES#', item.classes);
    keyboardTemplate += res;
  });
  return keyboardTemplate;
}




// // ingener
//
// const ingenerTemplates = {
//   templateOK: {
//   'calculator' : {
//     selector: "#calculator",
//     html: switcher + templateOK.calc
//   },
//   'display': {
//     selector: "#display",
//     html: templateOK.display
//   },
//   'keyboard': {
//     selector: "#keyboard",
//     html: getIngenerTemplateKeyboard(templateOK.keyboard)
//   },
// },
//   templateSV: {
//   'calculator': {
//     selector: "#calculator",
//     html: switcher + templateSV.calc
//   },
//   'display': {
//     selector: "#display",
//     html: templateSV.display
//   },
//   'keyboard': {
//     selector: "#keyboard",
//     html: getIngenerTemplateKeyboard(templateSV.keyboard)
//   },
// },
//   templateSY: {
//     'calculator': {
//       selector: "#calculator",
//       html: switcher + templateSY.calc
//     },
//     'display': {
//       selector: "#display",
//       html: templateSY.display
//     },
//     'keyboard': {
//       selector: "#keyboard",
//       html: getIngenerTemplateKeyboard(templateSY.keyboard)
//     },
//   },
//   keysClass: keysClass,
// }
// function getIngenerTemplateKeyboard(template) {
//   let keyboardTemplate = '';
//   engineering.map(item => {
//     let res = template;
//     res = res.replace('#ID#', item.id);
//     res = res.replace('#HANDLER#', item.handler);
//     res = res.replace('#NAME#', item.name);
//     res = res.replace('#CLASSES#', item.classes);
//     keyboardTemplate += res;
//   });
//   return keyboardTemplate;
// }
