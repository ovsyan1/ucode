function getPaginate() {
    countOfItems = Math.ceil(newProducts.length / notesOnPage);
    let render = '<button class="prev-button-pag" id="prev" style="display: none;">&lt;</button>';
    for (let i = 1; i <= countOfItems; i++) {
        render += '<li id="p-' + i + '"' + (i === +currentPage ? ' class="active page-num"' : 'class="page-num"') + '>' + i + '</li>'
    }
    render += '<button class="next-button-pag" id="next">&gt;</button>'
    pagination.innerHTML = render
    document.querySelector('.next-button-pag').addEventListener('click', nextPage)
    document.querySelector('.prev-button-pag').addEventListener('click', prevPage)
    items = document.querySelectorAll('.page-num')
    window.addEventListener('resize', init);
    for (let item of items) {
        item.addEventListener('click', function () {
            showPage(this);
        });
    }
    if (countOfItems == 1) {
        document.querySelector('.page-num').style.display = "none"
    }
}
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(items[currentPage - 1])
    }
}
function nextPage() {
    if (currentPage < countOfItems) {
        currentPage++;
        showPage(items[currentPage - 1])
    }
}
function showPage(item) {
    let active = document.querySelector('#pagination li.active');
    let pageNum;
    if (item) {
        if (active) { };
        pageNum = item.innerHTML;
    } else pageNum = 1;
    currentPage = pageNum;
    getPaginate()
    if (currentPage == 1) {
        document.querySelector('#prev').style.display = "none"
    } else {
        document.querySelector('#prev').style.display = "block"
    }
    if (currentPage == countOfItems) {
        document.querySelector('#next').style.display = "none"
    } else {
        document.querySelector('#next').style.display = "block"
    }
    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;
    let notes = newProducts.slice(start, end);
    itemsBox.innerHTML = '';
    for (let note of notes) {
        let div = document.createElement('div');
        div.setAttribute('class', 'tr-box ' + note.tag)
        itemsBox.appendChild(div);
        let i = 0;
        createCell(`<img class="img-js" src="${note.img}" alt=${note.tag} >`, div)
        createCell(note.name, div)
        createCell(note.title, div)
        createCell(note.productDescription, div)
        createCell(note.brandOfProduct, div)
        createCell(`Price: ${note.price}`, div)
        createCell(note.availableName, div)
        createCell(`<button id="add-button" onclick="addItems(${note.id})"` + '">Add to cart', div)
        i++;
    }
}
function createCell(text, div) {
    let a = document.createElement('a');
    a.innerHTML = text;
    div.appendChild(a);
}