const priceBlock = document.getElementById('price');
const cheapest = document.createElement('button');
const mostExpensive = document.createElement('button');
const randomButton = document.createElement('button');
const allItems = document.createElement('button');

priceBlock.appendChild(allItems);
priceBlock.appendChild(cheapest);
priceBlock.appendChild(mostExpensive);
priceBlock.appendChild(randomButton);
cheapest.innerHTML = `Cheapest`;
mostExpensive.innerHTML = `Most Expensive`;
randomButton.innerHTML = `Random`;
allItems.innerHTML = `All products`

function sortByCheapest(arr){
       arr.sort((a, b) => a.price > b.price ? 1 : -1)
       showPage(items[0]);
}
function sortByExpensive(arr){
       arr.sort((a, b) => a.price < b.price ? 1 : -1)
       showPage(items[0]);
}
function allProducts(){
       location.reload()
       showPage(items[0])
}
// function randomSort(arr){
//        arr([Math.floor(Math.random() * products.length)]);
//        showPage(items[0]);
// }

cheapest.addEventListener('click',() => { 
       sortByCheapest(products);
});
mostExpensive.addEventListener('click',() =>{
       sortByExpensive(products)
});
allItems.addEventListener('click',() =>{
allProducts()
})
// randomButton.addEventListener('click', () =>{
//        randomSort(products)
// });