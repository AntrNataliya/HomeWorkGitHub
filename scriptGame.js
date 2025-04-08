const hiddenNumber = Math.floor(Math.random() * 100) + 1;

function game1() {
   while (true) {
    const input = Number(prompt('Попробуй угадать число от 1 до 100'));
    if (input === 0) {
        alert('Попробуй еще!');
        return;
    }

    if (input === hiddenNumber) {
        alert(`Молодец! Верно! ${hiddenNumber}`);
        break;
    }
    else if (input < hiddenNumber) {
        alert('Число должно быть больше!');
   } else {
    alert('Число должно быть меньше')
    }
  }
}


function game2() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let result = " ";
    let userAnswer = "";

    switch(operator) {
        case "+":
            userAnswer = +prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;
        case "-":
            userAnswer = +prompt(`Вычтите ${a} из ${b}`);
            result = a - b;
            break;  
        case "*":
            userAnswer = +prompt(`Умножте ${a} на ${b}`);
            result = a * b;
            break;  
        case "/":
            userAnswer = +prompt(`Разделите ${a} на ${b}`);
            result = a / b;
            break;
    }
      if (Number(userAnswer) === result) {
        alert("Верно");
    } else {
        alert("Неверно");
    }
}