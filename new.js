// create an event listner for the start game that when you click, it hides the start button and displays main game. 
// remebr to set main game to hidden by default

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("start").classList.add("hidden")
    document.getElementById("main_game").classList.remove("hidden")
    countertext.innerHTML ="Paper, Rock, Scissors"
    clearchoice(user_choice)
    clearchoice(computer_choice)

    yourchoice = null
    compchoice = null
    
    StartTimer()
})



// create a timer for the computer, use set time out
countertext = document.getElementById("counter")

const StartTimer = () => {
    let counter = 5

    let counterid = setInterval(() => {
        countertext.innerHTML = counter
        counter--
        if (counter === 0) {
            clearInterval(counterid)
            let_computer_make_choice()
            countertext.innerHTML = determineWinner()
            document.getElementById("start").classList.remove("hidden")
            document.getElementById("start").innerHTML = "Replay"

        }
    }, 1000)
}

let computer_rock = document.getElementById("c_Rock")
let computer_paper = document.getElementById("c_Paper")
let computer_scissors = document.getElementById("c_Scissors")



let computer_choice = [computer_rock, computer_paper, computer_scissors]

let compchoice, yourchoice

const let_computer_make_choice = () => {

    let randomIndex = Math.floor(Math.random() * computer_choice.length);
    clearchoice(computer_choice)
    computer_choice[randomIndex].classList.toggle("active")
    compchoice = computer_choice[randomIndex]
}

let clearchoice = (choices) => {
    choices.forEach(
        (choice) => {
            choice.classList.remove("active")
            console.log(choice)
        }
    )

}




let user_rock = document.getElementById("user_rock")
let user_paper = document.getElementById("user_paper")
let user_scissors = document.getElementById("user_scissors")

let user_choice = [user_rock, user_paper, user_scissors]


const my_choice = (choice) => {
    console.log(choice)
    clearchoice(user_choice)
    choice.classList.toggle("active")
    yourchoice = choice



}


const determineWinner = () => {
    // console.log(yourchoice.dataset.name, compchoice.dataset.name)
    if (yourchoice) {
        if (
            (yourchoice.dataset.name === compchoice.dataset.name) ||
            (yourchoice.dataset.name === compchoice.dataset.name) ||
            (yourchoice.dataset.name === compchoice.dataset.name)) {
            return "it's a tie"

        } else if (
            (yourchoice.dataset.name === "rock" && compchoice.dataset.name === "scissors") ||
            (yourchoice.dataset.name === "paper" && compchoice.dataset.name === "rock") ||
            (yourchoice.dataset.name === "scissors" && compchoice.dataset.name === "paper")

        ) {
            return "You win";
        } else {
            return "you lose"
        }
    } else {
        return "no choice made"
    }
}

