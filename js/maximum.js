let itemText = `
<h1>Ви пройшли третій етап: додаткова взаємодія з користувачем.</h1>
<br>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

function closeTab() {
  if (confirm("До побачення!")) {
    window.close();
  }
}

let userChoice = prompt("Введіть радіус кола у сантиметрах", "0");
let circleArea = Math.round(Math.pow(userChoice, 2) * Math.PI);
alert("Площа кола дорівнює " + circleArea + " см.!");
