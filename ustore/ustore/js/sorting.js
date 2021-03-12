function sortByAvailable(){
       document.querySelector('#check-available').addEventListener('click', ()=>{
              document.querySelector('#check-available').value;
              newProducts = getNewProducts()
              newProducts = newProducts.filter((item)=>{
                     if(item.available == true){
                                 return true  
                     }
              })
              showPage(items[0])
          })
}
function sortByNotAvailable(){
       document.querySelector('#check-not-available').addEventListener('click', ()=>{
              document.querySelector('#check-not-available').value;
              newProducts = getNewProducts()
              newProducts = newProducts.filter((item)=>{
                     if(item.available === false){
                                 return true  
                     }
              })
              console.log('ghg')
              showPage(items[0])
          })
}

sortByNotAvailable()
function sortByCheapest(){
       newProducts = getNewProducts()
       newProducts.sort((a, b) => a.price > b.price ? 1 : -1)
       showPage(items[0]);
}
function sortByExpensive(){
       newProducts = getNewProducts()
       newProducts.sort((a, b) => a.price < b.price ? 1 : -1)
       showPage(items[0]);
}
function allProducts(){
       location.reload()
       showPage(items[0])
}

function sortBySony(){
       newProducts = getNewProducts()
        newProducts = newProducts.filter((item)=>{
              if(item.brandOfProduct == 'Brand: Sony'){
                   return true 
              } 
        });
       showPage(items[0])
}
function sortByMicrosoft(){
       newProducts = getNewProducts()
       newProducts = newProducts.filter((item)=>{
             if(item.brandOfProduct == 'Brand: Microsoft'){
                  return true
             }   
       });
      showPage(items[0])
}
function sortByNintendo(){
       newProducts = getNewProducts()
       newProducts = newProducts.filter((item)=>{
             if(item.brandOfProduct == 'Brand: Nintendo'){
                  return true
             }   
       });
      showPage(items[0])
}