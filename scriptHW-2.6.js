// // Задание 1


const arr = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[i] === 10) {
        break;
    }
}

// // Задание 2

const arr1 = [1, 5, 4, 10, 0, 3]
console.log(arr1.indexOf(4));
for (let i = 0; i < arr1.length; i++) {
    
    if(arr1[i] === 4) {
        console.log(arr1[i]);
        break;
    }
}

// // Задание 3

const arr2 = [1, 3, 5, 10, 20]
console.log(arr2.join(' '));


// // Задание 4

const arr3 = []
for (let i = 0; i < 3; i++) {
    const arrI = [];
    for (let i = 0; i < 3; i++) {
        arrI.push(1);
    }
    arr3.push(arrI);
} 
console.log(arr3)

// // Задание 5

const arr5 = [1,1,1]
arr5.push(2, 2, 2);
console.log(arr5);

// // Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5]
arr6.sort();
arr6.pop();
console.log(arr6);

// // Задание 7

const arr7 = [9, 8, 7, 6, 5]
const userNumber = +prompt ('Введите число');
if (arr7.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал')
}

// // Задание 8

let str = 'abcdef'
str = str.split('');
str.reverse();
str = str.join('');
console.log(str);

// // Задание 9

const arr9 = [[1, 2, 3],[4, 5, 6]];
const newArr = [];
for (let i = 0; i < arr9.length; i++) {
    newArr.push(...arr9[i]);
}
console.log(newArr);

// // Задание 10

const arr10 = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i + 1]) {
        console.log(arr10[i] + arr10[i + 1]);
    }
}

// // Задание 11

function square(arrF) {
    return arrF.map(item => item ** 2);
}
console.log(square([2, 3, 4]));


// // Задание 12

function getLength(arr12) {
    return arr12.map(item => item.length);
}
console.log(getLength(['nice', 'to', 'meet', 'you']));

// // Задание 13

function negativeNumbers(array) {
    return array.filter(item => item < 0);
}
console.log(negativeNumbers([1, 5, 7, -9, 8, -10, 15, -17]));

// // Задание 14

function randomNumb() {
    return Math.floor(Math.random() * 10);
}
const arr14 = []

for (let i = 0; i < 10; i ++) {
    arr14.push(randomNumb());
}
console.log(arr14);

const evenArr = []

for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 === 0) {
        evenArr.push(arr14[i]);
    }
}

console.log(evenArr);

// // Задание 15

function randomNumb() {
    return Math.floor(Math.random() * 10);
}
const arr15 = []

for (let i = 0; i < 6; i ++) {
    arr15.push(randomNumb());
}
console.log(arr15);
console.log(arr15.reduce((a, b) => a + b) / arr15.length);
