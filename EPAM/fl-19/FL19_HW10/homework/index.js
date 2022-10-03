let nickname = document.getElementById('enter_nickname') .value;
let start = document.getElementById('start_but');

function empty() {
    try {
        if (nickname.value === '') {
            throw 'Empty nickname';
        }
    } catch (error) {
        alert('Empty nickname');
    }
}
start.addEventListener('click', function() {
    if(nickname !== '') {
        console.log(1);
    } else{
    empty();
}
})
let count = 3000;
setTimeout(() => {
       alert(count)
       localStorage.setItem(nickname.value, JSON.stringify(count))
       let gettingValue = localStorage.getItem(nickname.value);
       let result = JSON.parse(gettingValue);
       return typeof result;
    // eslint-disable-next-line no-magic-numbers
    }, 3000 );
function bestResult(){
    let bestResult = document.getElementById('best_res');
    return window.sessionStorage.getItem(result)   
}

function clearresult (){
    window.sessionStorage.clear()
    alert ('best result is clear')
}

function clearBestResAllTime(){
    localStorage.clear()
    alert('Best result for all time cleard');
}



   


