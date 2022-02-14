function createDaysOfTheWeek() {
    const weekDays = ['Domo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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
const container = document.querySelector('#days');

function createDaysOfTheMonth (){
  for (let index = 0; index < dezDaysList.length; index += 1){
      let numberDays = dezDaysList[index];
      let numberDaysItem = document.createElement('li');
      numberDaysItem.innerHTML = numberDays;
      numberDaysItem.className = 'day';
      container.appendChild(numberDaysItem);
      if (numberDays === 24 || numberDays === 25 || numberDays === 31){
          numberDaysItem.classList.add('holiday');
      } if (numberDays === 04 || numberDays === 11 || numberDays === 18 || numberDays === 25){
        numberDaysItem.classList.add('friday');
      }
    }
}
createDaysOfTheMonth();

function createButton(string){
    let containerButton = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerText = string;
    containerButton.appendChild(button);
;}
createButton('Feriados');