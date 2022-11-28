let itemText = `
<h1>Ви пройшли другий етап: взаємодія з користувачем.</h1>
<br>
<button type="button" onclick="import('./js/maximum.js')">Продовжити</button>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

const userName = prompt("Як вас звати?", "John");
alert("Привіт, " + userName + " !");

const birthYear = prompt(userName + ", в якому році ви народилися?", 1900);
alert(
  "Ваш вік у роках дорівнює " +
    (new Date().getFullYear() - birthYear) +
    ", " +
    userName +
    "!"
);

const userChoice = prompt(
  userName + ", введіть довжину сторони квадрата у сантиметрах",
  "0"
);
alert("Периметр квадрата дорівнює " + Math.round(userChoice * 4) + " см.!");
