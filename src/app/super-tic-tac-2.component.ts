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

constructor(private router:Router) {
    
}

    winText: string = '';
    boards: string[][] = Array(9).fill(null).map(() => Array(9).fill(''));
    currentPlayer: 'X' | 'O' = 'X';
    gameOver: boolean = false;

    goToTictac2(){
        this.router.navigate(['/tictac2'])
    }

    handleClick(boardIndex: number, cellIndex: number) {
        if (this.boards[boardIndex][cellIndex]) return;
        console.log(this.boards);

        this.boards[boardIndex][cellIndex] = this.currentPlayer;
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }

        //
        if (
            (this.boards[0][0] === 'X' && this.boards[0][1] === 'X' && this.boards[0][2] === 'X') ||
            (this.boards[0][0] === 'X' && this.boards[0][3] === 'X' && this.boards[0][6] === 'X') ||
            (this.boards[0][0] === 'X' && this.boards[0][4] === 'X' && this.boards[0][8] === 'X') ||
            (this.boards[0][6] === 'X' && this.boards[0][4] === 'X' && this.boards[0][2] === 'X') ||
            (this.boards[0][2] === 'X' && this.boards[0][5] === 'X' && this.boards[0][8] === 'X') ||
            (this.boards[0][6] === 'X' && this.boards[0][7] === 'X' && this.boards[0][8] === 'X') ||
            (this.boards[0][3] === 'X' && this.boards[0][4] === 'X' && this.boards[0][5] === 'X') ||
            (this.boards[0][1] === 'X' && this.boards[0][4] === 'X' && this.boards[0][7] === 'X')
        ) {
            console.log('x :)')
            this.boards.forEach((_,square) => {
                // this.board[square] = '';
                this.boards[0][square] = "X";
                console.log("veld 1 x won")
            })
            // this.gameOver = true;
            
            this.winText = 'X has won veld 1'
        }

        if (
            (this.boards[0][0] === 'O' && this.boards[0][1] === 'O' && this.boards[0][2] === 'O') ||
            (this.boards[0][0] === 'O' && this.boards[0][3] === 'O' && this.boards[0][6] === 'O') ||
            (this.boards[0][0] === 'O' && this.boards[0][4] === 'O' && this.boards[0][8] === 'O') ||
            (this.boards[0][6] === 'O' && this.boards[0][4] === 'O' && this.boards[0][2] === 'O') ||
            (this.boards[0][2] === 'O' && this.boards[0][5] === 'O' && this.boards[0][8] === 'O') ||
            (this.boards[0][6] === 'O' && this.boards[0][7] === 'O' && this.boards[0][8] === 'O') ||
            (this.boards[0][3] === 'O' && this.boards[0][4] === 'O' && this.boards[0][5] === 'O') ||
            (this.boards[0][1] === 'O' && this.boards[0][4] === 'O' && this.boards[0][7] === 'O')
        ) {
            this.boards.forEach((_, square) => {
                // this.board[square] = '';
                this.boards[0][square] = "O";
            })
            // this.gameOver = true;
            console.log('o has won veld 1');
            this.winText = 'O has won veld 1'
        }

        if (
            (this.boards[1][0] === 'X' && this.boards[1][1] === 'X' && this.boards[1][2] === 'X') ||
            (this.boards[1][0] === 'X' && this.boards[1][3] === 'X' && this.boards[1][6] === 'X') ||
            (this.boards[1][0] === 'X' && this.boards[1][4] === 'X' && this.boards[1][8] === 'X') ||
            (this.boards[1][6] === 'X' && this.boards[1][4] === 'X' && this.boards[1][2] === 'X') ||
            (this.boards[1][2] === 'X' && this.boards[1][5] === 'X' && this.boards[1][8] === 'X') ||
            (this.boards[1][6] === 'X' && this.boards[1][7] === 'X' && this.boards[1][8] === 'X') ||
            (this.boards[1][3] === 'X' && this.boards[1][4] === 'X' && this.boards[1][5] === 'X') ||
            (this.boards[1][1] === 'X' && this.boards[1][4] === 'X' && this.boards[1][7] === 'X')
        ) {
            console.log('x :)')
            this.boards.forEach((_, square) => {
                // this.board[square] = '';
                this.boards[1][square] = "X";
                console.log("veld 2 x won")
            })
            // this.gameOver = true;
            this.winText = 'X has won veld 2'
        }

        if (
            (this.boards[1][0] === 'O' && this.boards[1][1] === 'O' && this.boards[1][2] === 'O') ||
            (this.boards[1][0] === 'O' && this.boards[1][3] === 'O' && this.boards[1][6] === 'O') ||
            (this.boards[1][0] === 'O' && this.boards[1][4] === 'O' && this.boards[1][8] === 'O') ||
            (this.boards[1][6] === 'O' && this.boards[1][4] === 'O' && this.boards[1][2] === 'O') ||
            (this.boards[1][2] === 'O' && this.boards[1][5] === 'O' && this.boards[1][8] === 'O') ||
            (this.boards[1][6] === 'O' && this.boards[1][7] === 'O' && this.boards[1][8] === 'O') ||
            (this.boards[1][3] === 'O' && this.boards[1][4] === 'O' && this.boards[1][5] === 'O') ||
            (this.boards[1][1] === 'O' && this.boards[1][4] === 'O' && this.boards[1][7] === 'O')
        ) {
            this.boards.forEach((_, square) => {
                // this.board[square] = '';
                this.boards[1][square] = "O";
            })
            // this.gameOver = true;
            console.log('o has won veld 2');
            this.winText = 'O has won veld 2'
        }

    }

    resetBoard() {
        this.boards.forEach((_,element) => {
            this.boards[element] = [''];
        });
    };


}