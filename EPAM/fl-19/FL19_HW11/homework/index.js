let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getWeekDay (){
   let weekDay = days.getDay();
   return weekDay;
}
console.log(getWeekDay(Date.now()));