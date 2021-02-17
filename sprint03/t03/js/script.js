function addWords(obj, wrds){
 let a = obj.words.split(' ');//создаем массив 
 a.splice(1,2);
 let b = wrds.split(' ')//создаем массив
 obj.words = a.concat(b[0])//склеиваем новый массив с 0 индекса
 obj.words = obj.words.join(' ')
}
function removeWords(obj, wrds){
let a = obj.words.split(' ');
wrds = wrds.split(' ').filter(Boolean)
wrds.map(function(x){
  obj.words = obj.words.replace(x, ' ').trim()
})
}
function changeWords(obj, oldWrds, newWrds){
  let a = obj.words.split(' ');
  oldWrds = oldWrds.split(' ').filter(Boolean)
  oldWrds.map(function(x){
    obj.words = obj.words.replace(x, ' ').trim()
  })
  a = newWrds
  obj.words = a.concat(' ').trim()
}



const obj = {
    words: 'newspapers newspapers  books magazines'
};
console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers  ');
console.log(obj); // {words: "newspapers books magazines radio"} 

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}
