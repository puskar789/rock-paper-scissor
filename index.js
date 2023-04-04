const choices=["Rock","Paper","Scissor"];

let userscore_span = document.getElementById
("user-score");
let computerscore_span = document.getElementById
("computer-score");
let resulttext = document.querySelector(".result-text");

let userscore=0;
let computerscore=0;
let userchoice="";
let computerchoice="";

main();
function main()
{
    const rock_div=document.getElementById("rock");
    const paper_div=document.getElementById("paper");
    const scissor_div=document.getElementById("scissor");

    rock_div.addEventListener("click",()=> game("Rock"));
    paper_div.addEventListener("click",()=>game("Paper"));
    scissor_div.addEventListener("click",()=>game("Scissor"));
    
}


function game(userchoice)
{
    const randomindex = Math.floor(Math.random()*choices.length);
    computerchoice=choices[randomindex];
    switch(userchoice+computerchoice)
    {

        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(userchoice,computerchoice);
        break;

        case "ScissorRock":
        case "RockPaper":
        case"PaperScissor":
            lose(userchoice,computerchoice);
        break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userchoice,computerchoice);
        break;
    }
}

function win(userchoice,computerchoice)
{
    userscore++;
    userscore_span.innerHTML = userscore;
    resulttext.innerHTML=`${userchoice} beats ${computerchoice} You win`;
}

function lose(userchoice,computerchoice)
{
    computerscore++;
    computerscore_span.innerHTML = computerscore;
    resulttext.innerHTML=`${computerchoice} beats ${userchoice} You lose`;
}

function draw(userchoice,computerchoice)
{
    resulttext.innerHTML="Its a draw";
    resulttext.innerHTML=`${computerchoice} and ${userchoice} is the choice and It is a draw`;
}
