const readlineSync = require('readline-sync');
const chalk = require('chalk');

import { GameChoise } from "./gamechoise";
import { AIPlayer } from "./ai";



function readOption(): GameChoise{
	let line: string = readlineSync.question(chalk.redBright('Rock paper or scissors?')).toLowerCase();
	if(line === 'rock')
		return GameChoise.Rock;
	if(line === 'paper')
		return GameChoise.Paper;
	if(line === 'scissors')
		return GameChoise.Scissors
	console.log('invalid input\n');
	return readOption();
}

function randomResult(): GameChoise{
	let randomNumber = Math.random()*3;

	if(randomNumber <= 1){
		return GameChoise.Rock;
	}
	else if(randomNumber-1 <= 1){
		return GameChoise.Paper;
	}
	else{
		return GameChoise.Scissors;
	}
}

function stage2Mode(turns: number): void{
	
	let humanWon = 0;
	let computerWon = 0;
	
	const ai1 = new AIPlayer();
	const ai2 = new AIPlayer();
	
	let n = 0;
	for(; n < turns; n++){
		let humanTurn = readOption();
		let computerTurn = ai2.getNextTurn();
	
		if(humanTurn == GameChoise.Rock){
			if(computerTurn == GameChoise.Scissors){
				console.log('Human won!');

				ai1.update(computerTurn);
				humanWon++;
			}
			else if(computerTurn == GameChoise.Rock){
				console.log('Draw!');
			}
			else{
				console.log('Computer won');

				ai2.update(humanTurn);
				computerWon++;
			}
		}
		else if(humanTurn == GameChoise.Paper){
			if(computerTurn == GameChoise.Rock){
				console.log('Human won!');

				ai1.update(computerTurn);
				humanWon++;
			}
			else if(computerTurn == GameChoise.Paper){
				console.log('Draw!');
			}
			else{
				console.log('Computer won!');

				ai2.update(humanTurn);
				computerWon++;
			}
		}
		else{
			if(computerTurn == GameChoise.Paper){
				console.log('Human won!');

				ai1.update(computerTurn);
				humanWon++;
			}
			else if(computerTurn == GameChoise.Scissors){
				console.log('Draw!');
			}
			else{
				console.log('Computer won');

				ai2.update(humanTurn);
				computerWon++;
			}
		}
	}
	

	console.log(`Computer:${computerWon}\t\tHuman:${humanWon}`)


		
}

function main(): void{
	stage2Mode(100);
}

main();