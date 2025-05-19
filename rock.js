let GameStarted = false // Game is not running

const getComputerCchoice= () =>{
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

playerChoice = null // meaning you made no choice

const determineWinner =(playerChoice, computerChoice) =>{
    if (playerChoice === null){
        return "You made no choice"
    }
    else if (playerChoice === computerChoice)
    {
        return "It's a tie"
    }else if (
        (playerChoice==="Rock"  &&  computerChoice==="Scissors")||
        (playerChoice==="Scissors"  &&  computerChoice==="Paper")||
        (playerChoice==="Paper"  &&  computerChoice==="Rock")
    ){
        return "You win" ;
    }else {
        return "Computer win"
    }
} 

// const playGame = (playerChoice)=> {
//     const computerChoice = getComputerCchoice ();
//     console.log(`you chose: ${playerChoice}`);
//     console.log(`the computer chose: ${computerChoice}`);
    
//     console.log(determineWinner(playerChoice, computerChoice));
// }

let countDownTime
let ResultDisplay  = document.getElementById("result")
let ComputerChoiceDisplay = document.getElementById("computer")

const timer = (next) => {
    setTimeout(()=>{
        // happens every one seconds
        if (countDownTime > 0){
            // reduce count down time
            ResultDisplay.innerHTML = countDownTime
            countDownTime--
           
            timer(next)
        }else{
            next()
        }
    }, 1000);
}

const resetBtns = (btn) => {
    
    // Remove any other tab that was highlighted before
    let allButtons = document.getElementsByClassName("btn")

    for(i = 0; i < allButtons.length; i++){
        if (btn !== null ? (allButtons[i].innerHTML !== btn.innerHTML) : true){
            if (allButtons[i].classList.contains("active")){
                allButtons[i].classList.toggle("active")
            }
        }
    };
}

const makeChoice = (btn) => {
    /// The id will be the iddentity of the button..
    // from the inner html
    resetBtns(btn)

    id  = btn.innerHTML
    btn.classList.toggle("active")

    if (btn.classList.contains("active")){
        // This item is slected
        playerChoice = btn.innerHTML
    }else{
        playerChoice = null
    }

}

let btnColl = document.getElementById("btn-collection") 

let cleanup = () => {
    countDownTime  = 5
    ResultDisplay.innerHTML = ""
    ComputerChoiceDisplay.innerHTML = ""
    playerChoice = null
    resetBtns(null)
    if (btnColl.classList.contains("none")){
        btnColl.classList.toggle("none")
    }
}

const startGame = () => {
    if (!GameStarted){
        GameStarted = true // game has started
        // Clear everything
        cleanup()
        document.getElementById("start").classList.toggle("none")


        // Computer to make a choice
        let computerChoice =  getComputerCchoice();
        ComputerChoiceDisplay.innerHTML = "I have choosen"

        // Start a clock that counts 5, 4, 3, 2, 1 then displays the results and the computer choice
        timer(()=>{

            // Display computer choice
            ComputerChoiceDisplay.innerHTML = `My choice - ${computerChoice}`
            
            // The computer has counted to 5'
            ResultDisplay.innerHTML = determineWinner(playerChoice,computerChoice)
            GameStarted = false
            document.getElementById("start").classList.toggle("none")

        })
    }
}

// document.getElementById("start").addEventListener(
//     "click", () =>{
//         startGame()
//     }
// )

