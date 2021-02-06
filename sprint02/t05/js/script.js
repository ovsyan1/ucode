var str1 = "You're catnipto a girl like me. Handsome, dazed, and to die for... ";
//charAt(2);вывожу по индексу между 2 и 3 числaми букву
//toUpperCase();сделать весь текст с большом буквы
//добавить до основной переменной
//concat(" - Catwoman");//добавить до str1 
var str2 = "Batman: \"I tried to say you.\""
var str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\"";
alert("Just string: " + str1 + "\n" + "Lenght: " + str1.length + "\n" +
"Character number 2 is: " + str1.charAt(2) + "\n" + "To uppercase " + 
str1.toUpperCase() + "\n" + "Concatenation in a phrase: " + str1.concat("- Catwoman") +
 "\n" + "[Batman Returns] " + str2 + "\n" + str3.replace(/catwoman/gi," ")); 
 //через replace задал изменение , gi-"глобал ,чтобы смотрел весь текст" 