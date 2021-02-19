let listLI = document.getElementsByTagName('li')//обращаемся к li элементам 
for (i = 0; i < listLI.length; i++){//задаем цикл,чтобы пересчитать все li элементы 
    let itemClass = listLI[i].getAttribute("class")//обращаеммся внутри li к их классам (перебирая их через цикл)
    if (itemClass == null || (itemClass != 'good' && itemClass != 'evil' && itemClass != 'unknown')){
        listLI[i].setAttribute('class', 'unknown');//задаем условие если класс == null тогда 
                                                   //создаем класс 'unknown' для тех элементов которые не имеют класс
    }                                              //теперь у нас все элементы которые без класса имеют класс 'unknown'
    let createData = listLI[i].getAttribute('data-element')//обращаемся к data-element
     if(!createData){//если не имеется у li даты-элемента, тогда присваиваем дату-элемент 'none'
        listLI[i].setAttribute('data-element', 'none')
    }
    createData = listLI[i].getAttribute('data-element').split(' ')//снова с помощью цикла пробигаемся по всем дата-элементам и с помощью split() преобразовуем в массив ,чтобы все дата элементы были отдельные 
    listLI[i].append(document.createElement('br'))//создаем элемент <br> для перехода строки, чтобы шарики были под надписью 
for(let k = 0; k < createData.length;k++){//делаем цикл в цикле, чтобы пересчитывались дата-элементы в новвосозданном массиве и подставлялось столько шариков сколько сущетсвует дата-элементов
    let createVar = document.createElement('div');//новый див для шариков
    listLI[i].append(createVar)//создаем в дата-элементах div
    createVar.className = `elem ${createData[k]}`//прикрепляем к дивам стиль шариков 
   

    if(createData[k] == 'none'){//последнее условие для дата-элементов 'none'
      let line = document.createElement('div')//тогда создаем новый див в котором будут стили line
      line.className = 'line'//вызиваем переменной line  стиль css
      createVar.append(line)//вставляем в старый див который имеет значени 'none' новый див со стилем CSS
    }
}
}