let itemText = `
<h1>Ви пройшли другий етап: взаємодія з користувачем.</h1>
<br>
<button type="button" onclick="import('./js/maximum.js')">Продовжити</button>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

function closeTab() {
  if (confirm("Бажаєте закрити вкладку?")) {
    window.close();
  }
}

let userName = prompt("Як вас звати?", "");
alert("Привіт " + userName + " !");

const birthYear = prompt("В якому році ви народилися", 1900);
let userAge = new Date().getFullYear() - birthYear;
alert("Ваш вік у роках дорівнює " + userAge + " !");

let userChoice = prompt("Введіть довжину сторони квадрата у сантиметрах", "0");
let perimetr = userChoice * 4;
alert("Периметр квадрата дорівнює " + perimetr + " см.!");
