/* Написать приложение "Лото". Программа должна по нажатию на кнопку генерировать случайным образом
 шесть чисел в диапазоне от 1 до 99.
Для генерации случайного числа можете скопировать себе функцию из 3-го урока getRandomInt
Постарайтесь в приложении сделать так чтобы сами кружки с цифрами не были изначально на верстке,
 а вы их генерировали через javascript как мы на уроке генерировали строки таблицы.
  Дизайн приложения на ваш вкус.*/






const numbersValueElements = document.getElementById("value");
const submitButton = document.querySelector("#submit");
 
submitButton.addEventListener("click", function(){
for(let i = 0; i <= 100; i++ ) {
    let numRandom = Math.random() * 100;
    let numRandomRound = Math.round(numRandom);
    console.log(numRandomRound);
}
})


  

/*const createCell = (value, options) => {
    const newCell = document.createElement(options.forBody ? "td" : "th"); //<td></td>
    newCell.innerHTML = value; //<td>value</td>
    !options.forBody && newCell.setAttribute("scope", "col");
    return newCell;
  };
  
  const createRow = (obj, options) => {
    const newTr = document.createElement("random");
    newTr.classList.add("text-center");
    for (const key in obj) {
      const data = options.forBody ? obj[key] : key;
      newTr.appendChild(createCell(data, options));
    }
    return newrandom;
  };*/