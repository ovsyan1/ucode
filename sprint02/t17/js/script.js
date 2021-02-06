let name = prompt('What your name?');
let name2 = prompt('What your last name?')
let regular = new RegExp("^[a-zA-Z]*$")

if(name && regular.test(name) && name2 && regular.test(name2)){
    name = name[0].toUpperCase() + name.slice(1)//slice(1)начинает выводить со второй буквы слова,так как первую букву сделал в upperCase
    name2 = name2[0].toUpperCase() + name2.slice(1)
    alert(`Hello, ${name} ${name2}!`)
    console.log(`Hello, ${name} ${name2}!`)
} else {
    alert('Wrong input!')
}