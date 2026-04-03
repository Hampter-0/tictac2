import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
    selector: 'app-super-tic-tac-2',
    standalone: true,
    templateUrl: './super-tic-tac-2.component.html',
    styleUrls: ['./super-tic-tac-2.component.css'],
})

export class SuperTicTac2Component {

    constructor(private router: Router) {

    }
    winText: string = '';
    boards: string[][] = Array(9).fill(null).map(() => Array(9).fill(''));
    currentPlayer: 'X' | 'O' = 'X';
    gameOver: boolean = false;
    currentField: string = '0'
    wonFields: boolean[] = Array(9).fill(false);

    goToTictac2() {
        this.router.navigate(['/tictac2'])
    }

    handleClick(boardIndex: number, cellIndex: number) {
        if (this.wonFields[boardIndex]) return;
        if (this.boards[boardIndex][cellIndex] !== '') return;
        this.boards[boardIndex][cellIndex] = this.currentPlayer;
        // console.log(this.boards);

        this.boards[boardIndex][cellIndex] = this.currentPlayer;
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }

        const possibleWins = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

        for (let i = 0; i < 9; i++) {
            if (this.wonFields[i]) continue;
            for (const [a, b, c] of possibleWins) {
                if (this.boards[i][a] && this.boards[i][a] === this.boards[i][b] && this.boards[i][a] === this.boards[i][c]) {
                    let winner = this.boards[i][a];
                    this.currentField = i.toString();
                    this.wonFields[i] = true;

                    if (winner === 'X') {
                        this.gameOver = true;
                        this.winText = `player X won field ${i} XD`
                    } else {
                        this.gameOver = true;
                        this.winText = `player O won field ${i} XD`
                    }
                    console.log(this.winText);
                    this.boards[i] = Array(9).fill(winner);
                }
            }
        }
    }


    resetBoard() {
        this.boards.forEach((_, element) => {
            this.boards[element] = [''];
        });
    };
}