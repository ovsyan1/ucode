// const filterBox = document.querySelectorAll('.tr-box');
// document.querySelector('.box-filter').addEventListener('click', (event)=>{
// if(event.target.tagName !== 'LI') return false;//защита от клика ммимо элемента li
// let filterClass = event.target.dataset['data-f']
// console.log(filterClass)
// });

// function sortByPrice(arr){
//        arr.sort(function (a, b) {
//           return a.price - b.price
//       });
//   return  console.log(sortByPrice(products))
// }
function sortByPrice(arr){
       arr.sort((a, b) => a.price > b.price ? 1 : -1)
       showPage(products[0])
}

// sortByPrice(products)

const navBlock = document.getElementById('box-filter');
console.log(navBlock)


const price = document.createElement('button');

navBlock.appendChild(price)
price.innerHTML = `Price`

price.addEventListener('click', showPage());