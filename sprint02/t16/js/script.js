function firstElements(arr, n){
    let res = [];
    for(i = 0; i < n && i < arr.length; ++i)
        res.push(arr[i]);//добавляет в переменную res нужную длинну массива и число 
        return res
}

let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];

console.log(firstElements(heroes, 5));
["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, 1));
// ["Captain America"]
console.log(firstElements(heroes, 3));
// ["Captain America", "Hulk", "Thor"]
console.log(firstElements(heroes, 6));
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, -1));
// []




// function firstElements(arr, n){
//       if(n >= 5){
//           return heroes;
//       }else if(n == 1){
//           return heroes[0]
//       }else if(n == 3){
//           let a = [];
//           a.push(heroes[0], heroes[1], heroes[2])
//           return a;
//       }else if(n == -1){
//         let b = [];  
//         return b
//       }
// }