const carts = document.querySelectorAll('#add-button');
const basket = document.querySelector('#basket');
const itemsBox = document.querySelector('#itemsBox');
const pagination = document.querySelector('#pagination');
let currentPage = 1;
let notesOnPage = 6;
let countOfItems = Math.ceil(products.length / notesOnPage);

const priceBlock = document.getElementById('price');
const smollerBoxFilter = document.getElementById('smaller-box-filter')
const allItems2 = document.createElement('button');
const cheapest2 = document.createElement('button');
const mostExpensive2 = document.createElement('button');
const sonyBrand2 = document.createElement('button');
const microsoftBrand2 = document.createElement('button');
const nintendoBrand2 = document.createElement('button');

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;


smollerBoxFilter.appendChild(allItems2)
smollerBoxFilter.appendChild(cheapest2)
smollerBoxFilter.appendChild(mostExpensive2)
smollerBoxFilter.appendChild(sonyBrand2)
smollerBoxFilter.appendChild(microsoftBrand2)
smollerBoxFilter.appendChild(nintendoBrand2)


allItems2.innerHTML = `All products`;
cheapest2.innerHTML = `Cheapest`;
mostExpensive2.innerHTML = `Most Expensive`;
sonyBrand2.innerHTML = `Sony`;
microsoftBrand2.innerHTML = `Microsoft`;
nintendoBrand2.innerHTML = `Nintendo`;
const sliderNext = document.querySelector('.slider-next')

let items = [];


cheapest2.addEventListener('click',() => { 
    sortByCheapest();
});
mostExpensive2.addEventListener('click',() =>{
    sortByExpensive()
});
allItems2.addEventListener('click',() =>{
allProducts()
});
sonyBrand2.addEventListener('click',()=>{
    sortBySony()
});
microsoftBrand2.addEventListener('click',()=>{
    sortByMicrosoft()
});
nintendoBrand2.addEventListener('click',()=>{
    sortByNintendo()
})

let newProducts = getNewProducts()//copy
init();
setInterval(nextSlider,5000)
sortByAvailable()
onLoadCartNumbers();
displayCart();
showPage(items[0], newProducts);

function getNewProducts(){
    return JSON.parse(JSON.stringify(products))
}