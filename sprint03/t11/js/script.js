let text = document.querySelector('#text');
let note = document.querySelector('#note');
let counter = 0;


function clicked() {
    if (text.value === "") {
        alert('It\'s empty. Try to input something in "Text input".')
    } else {
        let cookieValue = decodeURIComponent(document.myForm.name.value)//то что будет написано в text-area
        let date = new Date()//создание даты
        date.setMonth(date.getMonth() + 1)//сколько будет жить куки (здесь добавил на месяц)
        date = date.toUTCString()

        note.value += "-->" + cookieValue + "\n"
        document.cookie = `${counter} name =` + cookieValue + `;expires =` + date//для ввода данных в куки 
        counter++
    }
}

function deleteCookies() {
    confirm("Are you sure?")
    let result = ''
    if (result == true) {
        note.value = "";
        text.value = "";
        let cook = document.cookie.split(";")
        for (let i = 0; i < cook.length; i++) {
            let cookie = cook[i]
            let pos = cookie.indexOf("=")
            let name = pos > -1 ? cookie.substr(0, pos) : cookie
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"//для удаления куки
        }
    }
}