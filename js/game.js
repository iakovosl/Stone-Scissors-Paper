const choices = ['Rock', 'Scissors', 'Paper'];
let player_choice, computer_choice;
let player_score = 0;
let computer_score = 0;
const info = document.querySelector('#info');

function play(player_choice){
    computer_choice = Math.floor(Math.random() *3);
    //Eνημερώνεται ο υπολογιστής τι επέλεξε ο καθένας
    info.innerText = `You chose ${choices[player_choice]}, the computer selected
    ${choices[computer_choice]}`;
    if( player_choice === computer_choice) return;
    if(player_choice - computer_score == -1 || player_choice - computer_choice == 2){
        player_score++;
        document.querySelector('#player-score').innerHTML = player_score;
    }else{
        computer_score++;
        document.querySelector("#computer-score").innerHTML = computer_score;

    }
}

document.querySelector('#rock').addEventListener('click',()=>{
    player_choice = 0
    //console.log(player_choice); 
    play(player_choice);
});

document.querySelector('#scissors').addEventListener('click',()=>{
    player_choice = 1
    //console.log(player_choice);
    play(player_choice);
});

document.querySelector('#paper').addEventListener('click',()=>{
    player_choice = 2
    //console.log(player_choice);
    play(player_choice);
});
