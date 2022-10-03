let play = confirm("Do you want to play a game?")
if (play==true){
 alert("Start a game");
} else
 alert("You did not become a billionaire, but can.");

let number = Math.ceil(Math.random() * 8);
let choose = prompt("Choose a roulette pocket number from 0 to 8")
let attemts = 3;
let firstPrize = 100;
let secondPrize = 50;
let thirdprize = 25;
let variable = false;

while (attemts>0){
    if(choose != number){
        prompt("Attemt left 2");
        attemts--
        variable
    }
    if(choose != number){
        prompt("Attemt left 1");
        attemts--
        variable
    }
    if(choose != number){
        attemts == 0
        alert("Thank you for your participation.");
        variable
    }
    if(choose == number){
        attemts == 0
        alert("Congratulation, you won !" + firstPrize + "$ do you wants to play again?");
        variable == true;
    }else 
    alert("Thank you for your participation.")
    }

let win1 = alert("Congratulation, you won !" + firstPrize + "$ do you wants to play again?");
let chooseSecond = prompt("Choose a roulette pocket number from 0 to 12")
let numberSecond = Math.ceil(Math.random() * 12);
let win1True = true;
    
    while(win1True){
        if(chooseSecond != numberSecond){
        prompt("Attemt left 2");
        attemts--
        variable
        }
        if(chooseSecond != numberSecond){
        prompt("Attemt left 1");
        attemts--
        variable
        }
        if(chooseSecond != numberSecond){
        attemts == 0
        alert("Thank you for your participation.");
        variable
        }
        if(choose == number){
        attemts == 0
        alert("Congratulation, you won !" + firstPrize + "$ do you wants to play again?");
        variable == true;
        }
    }

let win2 = alert("Congratulation, you won !" + secondPrize + "$ do you wants to play again?");
let win2True = true;

    while(win2True){
        if(chooseSecond != numberSecond){
        prompt("Attemt left 2");
        attemts--
        variable
        }
        if(chooseSecond != numberSecond){
        prompt("Attemt left 1");
        attemts--
        variable
        }
        if(chooseSecond != numberSecond){
        attemts == 0
        alert("Thank you for your participation.");
        variable
        }
        if(choose == number){
        attemts == 0
        alert("Congratulation, you won !" + secondPrize + "$ do you wants to play again?");
        variable == true;
        }
    }

let win3 = alert("Congratulation, you won !" + thirdprize + "$ do you wants to play again?");
let win3True = true;

    while(win3True){
        if(chooseSecond != numberSecond){
        prompt("Attemt left 2");
        attemts--
        variable
        }
        if(chooseSecond != numberSecond){
        prompt("Attemt left 1");
        attemts--
        variable
        }
        if(chooseSecond != numberSecond){
        attemts == 0
        alert("Thank you for your participation.");
        variable
        }
        if(choose == number){
        attemts == 0
        alert("Congratulation, you won !" + thirdprize + "$ do you wants to play again?");
        variable == true;
        }
    }

   


   