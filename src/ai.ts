import { GameChoise } from "./gamechoise";

export class AIPlayer{
	public probobilityRock: number;
	public probobilityPaper: number;
	public probobilityScissors: number;
	constructor(){
		this.probobilityRock = 1/3;
		this.probobilityPaper = 1/3;
		this.probobilityScissors = 1/3;
	}

	// 0 - rock
	// 1 - paper
	// 2 - scissors
	public getNextTurn(): GameChoise{ // 0 - computer won 1 - draw 2 - human won
		let randomNum = Math.random();
		
		if(randomNum < this.probobilityRock){ // ROCK
			return GameChoise.Rock;
		}
		else if(randomNum-this.probobilityRock < this.probobilityPaper){ // if PAPER
			return GameChoise.Paper;
		}
		else{ // SCISSORS
			return GameChoise.Scissors;
		}
	}
	public update(human: GameChoise): void{
		if(human === GameChoise.Rock){
			this.probobilityRock = (this.probobilityRock)/2;
			this.probobilityPaper = (this.probobilityPaper + 0.5)/2	
			this.probobilityScissors = (this.probobilityScissors + 0.5)/2	
		}
		else if(human === GameChoise.Paper){
			this.probobilityPaper = (this.probobilityPaper)/2;
			this.probobilityRock = (this.probobilityRock + 0.5)/2	
			this.probobilityScissors = (this.probobilityScissors + 0.5)/2	
		}
		else{
			this.probobilityScissors = (this.probobilityScissors)/2;
			this.probobilityRock = (this.probobilityRock + 0.5)/2	
			this.probobilityPaper = (this.probobilityPaper + 0.5)/2	
		}
	}
}