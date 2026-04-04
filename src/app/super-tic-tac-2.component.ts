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
    wonFields: ('X' | 'O' | null)[] = Array(9).fill(null);
    isFull: boolean = true;

    goToTictac2() {
        this.router.navigate(['/tictac2'])
    }

    handleClick(boardIndex: number, cellIndex: number) {
        if (this.gameOver) return;
        if (this.wonFields[boardIndex]) return;
        if (this.boards[boardIndex][cellIndex] !== '') return;


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
                    const winner = this.boards[i][a] as 'X' | 'O';
                    this.currentField = i.toString();
                    this.wonFields[i] = winner;

                    if (winner === 'X') {
                        // this.gameOver = true;
                        this.winText = `player X won field ${i} XD`
                    } else {
                        // this.gameOver = true;
                        this.winText = `player O won field ${i} XD`
                    }

                    console.log(this.winText);
                    this.boards[i] = Array(9).fill(winner);
                }
            }
        }

        for (const [a, b, c] of possibleWins) {
            if (
                this.wonFields[a] &&
                this.wonFields[a] === this.wonFields[b] &&
                this.wonFields[a] === this.wonFields[c]
            ) {
                this.gameOver = true;
                this.winText = `user ${this.wonFields[a]} wins `;
                console.log(this.winText);
                return;
            }
        }

        this.isFull = true;
        this.boards[boardIndex].forEach(cell => {
            if (cell === '') {
                this.isFull = false;
            }
        });

        if (this.isFull && !this.wonFields[boardIndex]) {
            console.log(`Board ${boardIndex}`);
            this.wonFields[boardIndex] = null;
            this.boards[boardIndex] = Array(9).fill('-');
        }
    }


    resetBoard() {
        this.boards = Array(9).fill(null).map(() => Array(9).fill(''));
        this.wonFields = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winText = '';
        this.gameOver = false;
        this.currentField = '0';
    };
}