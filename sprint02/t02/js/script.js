var quote;
alert(quote);//ничего не выводит undefined

quote = 'With great power, comes great responsibility.';
alert(quote);// выводит то чему присвоил quote

function displayAuthor(){
     var author = 'Spiderman'
     alert(author)
      quote = '...'
    //выводит тоже самое ,чему присвоил + изменяю value quote на '...'
}

displayAuthor()
//заставляет работать функцию
alert(quote)