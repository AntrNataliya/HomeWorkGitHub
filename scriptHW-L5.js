// Задание 1

let userPass = prompt('Введите пароль');

let password = 'пароль';

if (userPass === password) {

    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

//задание 2
let c = 2
if (c >= 0 && c <= 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

//Задание 3
let d = 50
let e = 20
if (d >= 100 || e >= 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

//задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

//задание 5

let monthNumber = 13
switch (monthNumber) {
    case 1:
    case 2:
    case 12: 
        alert('Зима');   
        break;
    case 3:
    case 4:
    case 5: 
        alert('Весна');   
        break;
    case 6:
    case 7:
    case 8: 
        alert('Лето');   
        break;
    case 9:
    case 10:
    case 11: 
        alert('Зима');   
        break;    
    default:
        alert('Неверно');
        break;
}