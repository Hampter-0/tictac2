import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Component({
    selector: 'app-super-tic-tac-2',
    standalone: true,
    templateUrl: './super-tic-tac-2.component.html',
    styleUrls: ['./super-tic-tac-2.component.css'],
})

export class SuperTicTac2Component {
    winText: string = '';
    boards: string[][] = Array(9).fill(null).map(() => Array(9).fill(''));
    currentPlayer: 'X' | 'O' = 'X';

    handleClick(boardIndex: number, cellIndex: number) {
        if (this.boards[boardIndex][cellIndex]) return;

        this.boards[boardIndex][cellIndex] = this.currentPlayer;
        if (this.currentPlayer === 'X') {
            this.currentPlayer = 'O';
        } else {
            this.currentPlayer = 'X';
        }
    }

    resetBoard() {
        this.boards.forEach((_,element) => {
            this.boards[element] = [''];
        });
    };


}