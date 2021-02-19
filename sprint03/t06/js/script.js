'use strict';
function transformation(){
    let box = document.getElementById('lab');
    let result = document.getElementById('hero');
    if(result.innerHTML === 'Bruce Banner'){
        result.innerHTML = 'Hulk';
        box.style.backgroundColor = '#70964b';
        result.style.fontSize = '130px';
        result.style.letterSpacing = '6px';
    }else {
        result.innerHTML = 'Bruce Banner';
        result.style.fontSize = '60px';
        result.style.letterSpacing = '2px';
        box.style.backgroundColor = '#ffb300';
    }
}
