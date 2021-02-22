let carts = document.querySelectorAll('.add-button');

let products = [
    {
        name: 'Nintendo shoot',
        tag: 'nintendo-shoot',
        price: 200,
        inCart: 0
    },
    {
        name: 'Nintendo switch',
        tag: 'nintendo-switch',
        price: 450,
        inCart: 0
    },
    {
        name: 'PSP',
        tag: 'psp',
        price: 175,
        inCart: 0
    },
    {
        name: 'PsVita',
        tag: 'psvita',
        price: 220,
        inCart: 0
    },
    {
        name: 'Sega',
        tag: 'sega',
        price: 80,
        inCart: 0
    },
    {
        name: 'Super Nintendo',
        tag: 'super-nintendo',
        price: 100,
        inCart: 0
    },
]

let basket = document.querySelector('#basket');

for (let i = 0; i < carts.length; i++) {//цикл для всех кнопок 
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i])//закидываем в корзину items
        totalCost(products[i]);
    })
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

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);//сделать с обычного JSON объекта джаваскриптовый
    if (cartItems !== null) {//если что-то есть в корзине += один продукт
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
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
    console.log(cartItems)
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';//сначала всё пусто
        Object.values(cartItems).map(item => {// здесь всё добавляем именно value!
            productContainer.innerHTML += ` 
                     <div class="elements">
                     <span><b>${item.inCart}<span> x ${item.name}</span></span>
                     </div>                    
                     </div>
                     `
        });
        productContainer.innerHTML += `
        <div class="propusk"></div>
        <div class="total-price"><b>Total price:<b> $${cartCost},00 <div class="box-button-clear"><button class="clear-button" id="clear-button">Delete All</button></div></div>
         `
    }

}


let clearButton = document.getElementById('clear-button');
console.log(clearButton)
let productContainer = document.querySelector('#box')
 clearButton.addEventListener('click', ()=>{
    deleteAllStorage()
    console.log('ffff')
 })
/*-----------------очистка корзины-------------------*/
function deleteAllStorage(item) {
    let result = confirm("Are yoy sure?")
    if (result === true) {
        item = '';
        localStorage.clear()
        displayCart()
    }
}


onLoadCartNumbers();
displayCart();

/*------------------show cart-----------------------*/
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