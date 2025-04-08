// const user = {
//     name: 'Dasha',
//     age: 6,
//     city: 'Novosib',
//     getInfo() {
//         return `Пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`;
//     } 
// };
// console.log(user.getInfo());

//width
//  («ширина») и 
//  height
//   («высота»). Объекты должны содержать метод 
//  getRectangleArea
//  , который возвращает площадь прямоугольника, а также метод 
//  getRectanglePerimeter
//  , который возвращает периметр прямоугольника.
 
function getRectangleArea() {
    return this.width * this.height;
 }
 function getRectanglePerimeter() {
    return this.width * 2 + this.height * 2;
 }
const square1 = {
    width: 10,
    height: 15,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

const square2 = {
    width: 8,
    height: 6,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
};

console.log(square1.getArea());
console.log(square1.getPerimeter());
console.log(square2.getArea());
console.log(square2.getPerimeter());