/* eslint-disable quotes */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });




function chooseColor(){
    let isValidInput = false;
    while(!isValidInput){
        const playerInput = prompt("What color do you wanna play as? Blue or green? ").toLowerCase();
        if(playerInput === "blue"){
            player1 = '🔵';
            isValidInput = true;
        }else if(playerInput === 'red'){
            player1 = '🔴';
            isValidInput = true;
        }
    }
}

function main() {}
