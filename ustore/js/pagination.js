let itemsBox = document.querySelector('#itemsBox');
let pagination = document.querySelector('#pagination');
let currentPage = 1;
let notesOnPage = 6;
let countOfItems = Math.ceil(products.length / notesOnPage);


let items = [];
items = getPaginate(items);

showPage(items[0]);

for (let item of items) {
    item.addEventListener('click', function () {
        showPage(this);
    });
}

function getPaginate() {
    let arr = [];
    //Назад
    let prevButtonPag = document.createElement('button');
    prevButtonPag.setAttribute('class', 'prev-button-pag');
    prevButtonPag.setAttribute('id','prev')
    prevButtonPag.innerHTML = '<'
    pagination.appendChild(prevButtonPag).style.display="none"
    prevButtonPag.addEventListener('click', prevPage)
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        
        if(i === 1) {
            li.classList.add('active');
        }
        // li.setAttribute('id', i)
        li.innerHTML = i;
        pagination.appendChild(li);
        arr.push(li)
    }
 // Вперед
 let nextButtonPag = document.createElement('button');
    nextButtonPag.setAttribute('class', 'next-button-pag')
    nextButtonPag.setAttribute('id', 'next')
    nextButtonPag.innerHTML = '>'
    pagination.appendChild(nextButtonPag)
    nextButtonPag.addEventListener('click', nextPage)
    return arr;
}
function prevPage(){
    if(currentPage > 1){
    currentPage--;
    showPage(items[currentPage - 1])
    }

}
function nextPage(){
    if(currentPage < countOfItems) {
        currentPage++;
    showPage(items[currentPage - 1])
    }
    
}
function showPage(item) {
    let active = document.querySelector('#pagination li.active');
    
    let pageNum;
    if(item) {
        if (active) {
            active.classList.remove('active')
        };
        item.classList.add('active');
        pageNum = item.innerHTML;
    } else {
        
        pageNum = 1;
    }
    currentPage = pageNum;
if(currentPage == 1){
    document.querySelector('#prev').style.display="none"
}else{
    document.querySelector('#prev').style.display="block"
}
if(currentPage == countOfItems){
    document.querySelector('#next').style.display="none"
}else{
    document.querySelector('#next').style.display="block"
}
    
    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;
    let notes = products.slice(start, end);
    itemsBox.innerHTML = '';
    for (let note of notes) {
        let div = document.createElement('div');
        div.setAttribute('class', 'tr-box ' + note.tag)
        itemsBox.appendChild(div);
        let i = 0;
        createCell(`<img class="img-js" src="${note.img}" alt=${note.tag} >`, div)
        createCell(note.name, div)
        createCell(`Price: ${note.price}`, div)
        createCell(note.available, div)
        createCell(note.title, div)
        createCell(`<button id="add-button" onclick="addItems(${note.id})"` + '">Add to cart', div)
        i++;
    }
}
function createCell(text, div) {
    let a = document.createElement('a');
    a.innerHTML = text;
    div.appendChild(a);
}