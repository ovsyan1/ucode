let text = document.querySelector("#text")
let notes = document.querySelector("#note")
let counter = 0

function getFormattedDate(dateObject) {
    let options = {
        weekday: 'long'
    }
    let my_data = {
        data : dateObject.getDate(),
        month : dateObject.getMonth() +1,
        year : dateObject.getFullYear(),
        hours : dateObject.getHours(),
        minutes : dateObject.getMinutes(),
        weekday : dateObject.toLocaleString("en-US", options)
    }
    function hour(a) {
        return  String(a).length === 1? '0' + a : a
    }
    return `${my_data.data}.${hour(my_data.month)}.${my_data.year} ${hour(my_data.hours)}:${hour(my_data.minutes)} ${my_data.weekday}`
}

function clicked() {
    if (text.value === "") {
        alert("Wrong input")
    } else {
        // .name.value
        let cookieValue = decodeURIComponent(document.myForm.name.value)
        console.log(cookieValue)
        let data = new Date()
        data.setMonth(data.getMonth() + 1)
        notes.value += " --> " + cookieValue + " [" + getFormattedDate(data) + "]" + "\n" 
        localStorage.setItem(`${counter} name`, cookieValue)
        counter++
    }
}

function deleteAllCookies() {
    let result = confirm("Are yoy sure?")
    if (result == true) {
        notes.value = ""
        text.value = ""
       localStorage.clear()
    } 
}
