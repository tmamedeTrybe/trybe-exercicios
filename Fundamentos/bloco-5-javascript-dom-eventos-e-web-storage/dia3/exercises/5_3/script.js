function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createNumberDaysMonth (){
   const numbersDaysContainer = document.querySelector('#days');

  for (let index2 = 0; index2 < dezDaysList.length; index2 += 1){
        const numbersDay = dezDaysList[index2];
        const numbersDayItem = document.createElement('li');
        numbersDayItem.innerHTML = numbersDay;
        numbersDayItem.className = 'day';
        if (numbersDay == 24 || numbersDay == 25 || numbersDay == 31){
            numbersDayItem.classList.add('holiday');
        } if (numbersDay == 4 || numbersDay == 11 || numbersDay == 18 || numbersDay == 25){
            numbersDayItem.classList.add('friday')
        }

        numbersDaysContainer.appendChild(numbersDayItem);
  }
}

createNumberDaysMonth();

function createButton(string){
    let buttonContainer = document.querySelector(".buttons-container");
    let button = document.createElement('button');
    button.id = ("btn-holiday");
    button.innerHTML = string;

    buttonContainer.appendChild(button);

}
createButton('Feriados');

function changeColorHolidays (event){
    let holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index =+ 1){
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    }
}
changeColorHolidays();

button.addEventListener('click', changeColorHolidays);

