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

// Игра Простая Арифметика
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
// Игра Викторина
function simpleQuiz()  {
    const quiz = [
        {
            question: [`Как называется прямая линия, у которой есть начало, но нет конца?`],
            options: [`1. Отрезок`, `2. Луч `, `3. Кривая`], 
            correctAnswer: 2,
        },
        {
            question: [`В каком месте располагался пульт управления Карлсоном?`],
            options: [`1. На спине`, `2. На животе `, `3. На руке`], 
            correctAnswer: 2,
        },
        {
            question: [`Главное орудие хоккеиста – это … ?`],
            options: [`1. Плюшка`, `2. Клюшка `, `3. Коньки`], 
            correctAnswer: 2,
        }
    ]
    let num = 0;
    for (let i = 0; i < quiz.length; i++){
        let quizQuest = Number(prompt(`Выберите правильный ответ.\n${quiz[i].question}\n${quiz[i].options}`));
        if(quizQuest == quiz[i][`correctAnswer`]){
            num++;
            alert(`Вы ответили верно.`);
        } else {
            alert (`Вы ответили неверно.`)
        }
    }
    alert(`Вы ответили верно на ${num} вопросов.`);
}

// Игра Переверни текст
function reverseWord() {
    let text = prompt('Введите любой текст.');
    let reversedText = text.split('').reverse().join('');
    alert (reversedText);
}
// Игра5 камень ножницы бумага

function rockScissorsPaperGame() {
    
    const items = ['камень', 'ножницы', 'бумага'];
    const getItems = () => Math.floor(Math.random() * items.length);
    let playerEnter;
    const computerChoice = items[getItems()];

    switch (computerChoice) {
        case 'камень':
            
            break;
        case 'бумага':
           
            break;
        default: 'ножницы'
            break;
    }
    const regexp = /^[а-яА-Я]*$/;

    do {
            playerEnter = prompt("Введите, пожалуйста, любое из слов: 'камень', 'ножницы' или 'бумага'");
        if (regexp.test(playerEnter)) {
            if (playerEnter.toLowerCase() === computerChoice.toLowerCase()) {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert('Ничья!');
                } else if (playerEnter.toLowerCase() === 'бумага' && computerChoice.toLowerCase() === 'ножницы') {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert("Выиграл компьютер!");

                } else if (playerEnter.toLowerCase() === 'камень' && computerChoice.toLowerCase() === 'бумага') {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Player chose: ${playerEnter}`);
                    alert("Выиграл компьютер!");
                } else if (playerEnter.toLowerCase() === 'ножницы' && computerChoice.toLowerCase() === 'камень') {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert("Выиграл компьютер!");
                } else {
                    alert(`Выбор компьютера: ${computerChoice}`);
                    alert(`Выбор игрока: ${playerEnter}`);
                    alert("Вы выиграли!");
                }
        } else {
            alert("Вы ввели неверное слово!");
        }
                        
    } while (!regexp.test(playerEnter));
}