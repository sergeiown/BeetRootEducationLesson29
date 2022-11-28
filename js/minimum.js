let itemText = `
<h1>JavaScript може відображати дані різними способами:</h1>
<ol>
    <li>Запис в HTML елемент, використовуючи innerHTML .</li>
    <li>Запис в HTML виведення, використовуючи document. write() .</li>
    <li>Запис в вікно попередження (оповіщення), використовуючи window. alert().</li>
    <li>Запис в консоль браузера, використовуючи console. log() .</li>
</ol>
<br>
<button type="button" onclick="document.write(document.body.innerHTML = secondItemText)">Далі</button>
`;

let secondItemText = `
<script>
document.body.innerHTML = "";
</script>
<h1>Приклади іменування змінних, коректні та некоректні:</h1>
<p>Коректні: firstName, middleName, lastName, surName</p>
<p>Некоректні: FirstName, middle name, Last_Name, sur-name</p>
<br>
<button type="button" onclick="document.write(document.body.innerHTML = thirdItemText)">Далі</button>
`;

let thirdItemText = `
<script>
document.body.innerHTML = "";
</script>
<h1>Cпособи коментування коду:</h1>
<p>Однорядкові коментарі починаються з //</p>
<p>Багаторядкові коментарі починаються з /* і закінчуються */</p>
<br>
<button type="button" onclick="document.write(document.body.innerHTML = fourthItemText)">Далі</button>
`;

let fourthItemText = `
<script>
document.body.innerHTML = "";
</script>
<h1>Стилі написання імен змінних:</h1>
<ol>
    <li>camelCase</li>
    <li>PascalCase</li>
    <li>snake_case</li>
    <li>kebab-case</li>
    <li>Train-Case</li>
    <li>flatcase</li>
</ol>
<br>
<button type="button" onclick="import('./js/normal.js')">Продовжити</button>
<button type="button" onclick="closeTab()">Вихід</button>
`;

document.body.innerHTML = itemText;

function closeTab() {
  if (confirm("Бажаєте закрити вкладку?")) {
    window.close();
  }
}
