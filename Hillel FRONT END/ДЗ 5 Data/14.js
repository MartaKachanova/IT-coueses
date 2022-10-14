
    let today = new Date();
    let currentYears = today.getFullYear();
    let currentMonth = today.getMonth(); // текущий місяць
    let currentDate = today.getDate(); //текуща дата 22

    let dayInCurrentMonth = getDaysInMonth(currentYears, currentMonth);
    

console.log(dayInCurrentMonth);