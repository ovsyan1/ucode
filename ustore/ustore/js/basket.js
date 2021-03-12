function addItems(a) {
    if(products[a].available == true){
        cartNumbers(products[a]);//закидываем в корзину items
        totalCost(products[a]);
    }else alert('SOLD OUT, please choose another product.')
}
//------После перезагрузки страницы, счётчик остается с количеством товаров внутри корзины--------/
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if (productNumbers) {
        document.querySelector('#basket').textContent = productNumbers;//чтобы количество в корзине смотрело и давало ответ из localStorage
    }
}
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')

    productNumbers = parseInt(productNumbers)//преобразовуем из строки в число

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);//добавляються все items
        basket.textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        basket.textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);//сделать с обычного JSON объекта джаваскриптовый
    if (cartItems !== null) {//если что-то есть в корзине += один продукт
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,//копирование объекта
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))//вставляем в localStorage стринговый объект
    displayCart();
}
//------Подсчет TotalPrice-----/
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost')
    if (cartCost != null) {
        cartCost = parseInt(cartCost);//конвертируем из стринг в число
        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }
    displayCart();
}
//---------запихиваем к корзину-------------/
function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)//из localStorage всегда приходит стринговый объект(преобразовуем его в обычный объект)
    let productContainer = document.querySelector('#new-screen')
    let cartCost = localStorage.getItem('totalCost')
    // cartCost = parseInt(cartCost)
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';//сначала всё пусто
        Object.values(cartItems).map(item => {// здесь всё добавляем именно value!
            productContainer.innerHTML += ` 
                     <div class="elements">
                     <span><b>${item.inCart}<span> x ${item.name}</span></span>
                     </div>                    
                     `
        });
        productContainer.innerHTML += `
        <div class="propusk"></div>
        <div class="total-price"><b>Total price:<b> $${cartCost},00 <div class="box-button-clear"><button class="clear-button" id="clear-button">Delete All</button></div></div>
         `
        /*-----------------очистка корзины-------------------*/
        let clearButton = document.getElementById('clear-button');
        clearButton.addEventListener('click', () => {
            localStorage.clear();
            location.reload();
        })
    }

}
/*------------------show cart onclick-----------------------*/
function openBox() {
    let display = document.getElementById('box').style.display;
    let closeBasket = document.getElementById('close-button');
    closeBasket.addEventListener('click', () => {
        document.getElementById('box').style.display = 'none'
    })
    if (display == 'none') {
        document.getElementById('box').style.display = 'block';
        display.innerHTML = `<div class="box-button" id="box-button">Close<button class="button-basket">X</button></div>`
    } else {
        document.getElementById('box').style.display = 'none';

    }
}