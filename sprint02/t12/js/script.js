function triangle(length){
    let cars = '';

    for (let i = 1; i <= length; i++) {
        for (let j = 1; j <= i; j++) {
          cars += `*`;
        }
        cars += "\n";
      }
    alert(cars);
}
triangle(prompt('Enter'));