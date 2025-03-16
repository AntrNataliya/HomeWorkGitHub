function min(a, b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8,4));
console.log(min(6,6));

function isEven(n) {
    if (n % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(isEven(2));
console.log(isEven(3));


const up = (n) => n ** 2;

console.log(up(5));


function age() {
    let age = +prompt('Сколько тебе лет?');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else if (age >= 13) {
        alert('Добро пожаловать!');
    }
    else {
        alert('Вы ввели некорректное значение')
    }
} 

age ();


function calc(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    else {
        return a*b;
    }
}
 
console.log(calc(7,2));
    

function getNumber() {
    let number = prompt('Введите число');
    number = Number(number);
    if(isNaN(number)) {
        return 'Переданный параметр не является числом';
    } else {
       alert (`${number} в кубе равняется ${number ** 3}`);
    }
}

getNumber ();

function getArea () {
        return Math.PI * this.radius ** 2;
    }

function getPerimeter () {
    return 2 * Math.PI * this.radius;
}
const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 25,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}
console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());
console.log(circle1.methodGetPerimeter());
console.log(circle2.methodGetPerimeter());