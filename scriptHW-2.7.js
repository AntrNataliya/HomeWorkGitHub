// Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
function filter(arr, str) {
const lowerStr = str.toLowerCase(); 
return arr.filter(item => item.toLowerCase(). startsWith(lowerStr));
}
console.log(filter(['GreenTea', 'green', 'Cofee'], 'gr'));
// Задание 3
// Округлить число :32.58884

let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));


// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRundomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(getRundomNumber());

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function getRundomNumber6(num) {
    return Array.from({ length: Math.floor(num/2)}, () => Math.floor(Math.random() * num));
}
console.log(getRundomNumbe6r(10));

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getRundomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRundomInt(15, 18));

// Задание 8
console.log(newDate());

// Задание 9

const currentDate = new Date(); 
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", 
        "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getVinutes();
    const seconds = date.getSeconds();

    return`
    Дата: ${days} ${month[months]} ${year} — это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}   
console.log(formatDate(new Date()));
