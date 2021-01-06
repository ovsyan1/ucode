// первая переменная 

helloMessageId = 'first-name';//здесь сразу задаем на прямую переменную

helloMessageEl = document.getElementById(helloMessageId);
alert(helloMessageEl.className);

//вторая переменная 
var lastNameId; 
var lastNameEl;

lastNameId = "last-name";
lastNameEl = document.getElementById(lastNameId);
alert(lastNameEl.value);
lastNameEl.value = 'kamasutra';//можно изменить ввелью изнутри HTMl файла (если оно даже названо)
lastNameEl.className = 'temp';//точно так же можно поменять класс или что то другое 

// //третья переменная 
var adressId;
var adressEl;

adressId = "adress";
adressEl = document.getElementById(adressId);
alert(adressEl.id);

//четвертая переменная 
//можно использовать наоборот 
var indexId;
var indexEl;

indexEl = "index";
indexId = document.getElementById(indexEl);
alert(indexId.className);
//------------------------------
var avatarId;
var avatarEl;

avatarId = 'avatar-wrapper';
avatarEl = document.getElementById(avatarId);
alert(avatarEl.innerHTML);
//выводит в окно то что написано в этой строчке в HTML

var avatarId = 'avatar';
avatarEl = document.getElementById(avatarId);
alert(avatarEl.alt);
//напрямую ввывод из src вместе с задаванием id
//тоже самое можно делать и с alt
 

//--------------

var hobbiedId;
var hobbiesEl;

hobbiesId = 'hobbies';

hobbiesEl = document.getElementById(hobbiesId);
alert(hobbiesEl.value);
 
 
//value есть только у элементов , с помощью которых можно вводить данные 
//(впечатывать, выбирать)'input' 'select' 'textarea'
                       