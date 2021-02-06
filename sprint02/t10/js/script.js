let animalVal = /^[a-z]{1,20}$/i;
let genderVal = /^male|female\s?$/i;
let ageVal = /^[1-9]{1,5}$/;
let gender, animal, age;
let description;

animal = prompt('What animal is the superhero most similar to?');
if(!animalVal.test(animal)){
    alert('Wrong input!');
}else{
    gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    if(!genderVal.test(gender)){
        alert('Wrong input!');
    }else{
        age = prompt('How old is the superhero?');
        if(!ageVal.test(age)){
            alert('Wrong input!');
        }
    }
}

if(/^male$/i.test(gender) && age < 18){
description = 'boy';
}else if(/^male$/i.test(gender) && age > 18){
description = 'man'
}else if(/^female$/i.test(gender) && age < 18){
description = 'girl';
}else if(/^female$/i.test(gender) && age >= 18){
description = 'woman';
}else if(/\s$/i.test(gender) && age < 18){
    description = 'kid';
}else if(/\s$/i.test(gender) && age >= 18){
    description = 'hero';
}
alert(`The superhero name is:  ${animal}-${description}`);