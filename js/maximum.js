let itemText = `
<h1>Поздоровляю! Ви пройшли третій етап: додаткова взаємодія з користувачем.</h1>
<br>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

let userChoice = prompt("Введіть радіус кола у сантиметрах", "0");
alert(
  "Площа кола дорівнює " +
    (Math.pow(userChoice, 2) * Math.PI).toFixed(2) +
    " кв.см.!"
);

userChoice = prompt(
  "Введіть відстань в кілометрах від вашого міста до сусіднього",
  "10"
);
let userTime = prompt(
  "Зазначте за який час у годинах бажаєте дістатися до сусіднього міста",
  "1"
);
alert(
  "Зважаючи на введені дані, ви маєте бігти зі швидкістю " +
    Math.round(userChoice / userTime) +
    " км/год.!"
);

userChoice = prompt("Введіть суму в USD", "100");
const crossRate = 0.953238;
alert(
  `Обмін ${Number(userChoice).toFixed(2)} USD принесе ${(
    userChoice * crossRate
  ).toFixed(2)} EUR!`
);
