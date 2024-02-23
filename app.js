let un = document.querySelector("#user-nam");
let userpara = document.querySelector("#yscore");
let comspara = document.querySelector("#cscore");
let userScore = 0;
let comscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msg2 = document.querySelector(".msg-container");


const  user = prompt("please enter your name");
if(user != null){
    un.innerText = user;
}

const genCompchoice = () => {
    const options = ["rock","scissors","paper"];
    const randix = Math.floor(Math.random()*3);
    return options[randix];
};
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = ("Game was draw. Play Again");
    msg2.style.backgroundColor = "#EADE85";
};
const showwin = (userwin,userchoice,Compchoice) => {
    if(userwin){
        userScore++;
        userpara.innerText = userScore;
        msg.innerText = `You win!  Your ${userchoice} beats ${Compchoice}`;
        msg2.style.backgroundColor = "#4BFAF4";
    }else{
        msg.innerText = `"You lost! ${Compchoice} beats your ${userchoice}`;
        comscore++;
        comspara.innerText = comscore;
        msg2.style.backgroundColor = "#EE7E7E";
    }
}

const playgame = (userchoice) => {
    console.log("user chice = ",userchoice);

    const Compchoice = genCompchoice();
    console.log("comp choice = ",Compchoice);


    if (userchoice === Compchoice){
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "rock") {
            userwin = Compchoice === "paper" ? false:true;
        }else if(userchoice === "paper") {
            userwin = Compchoice === "scissors" ? false:true;
        }else{
            userwin = Compchoice === "rock" ? false:true;
        }  
        showwin(userwin,userchoice,Compchoice);  
    }
}    

choices.forEach((choice)  => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        
    });
});

