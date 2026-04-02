import { Component } from '@angular/core';
import { disabled } from '@angular/forms/signals';

@Component({
  selector: 'app-tic-tac-2',
  standalone: true,
  templateUrl: './tic-tac-2.component.html',
  styleUrls: ['./tic-tac-2.component.css'],
})

export class TicTac2Component {
  board: string[] = Array(9).fill('');
  winText: string = '';
  currentPlayer: 'X' | 'O' = 'X';
  gameOver: boolean = false;

  handleClick(index: number) {
    if (this.gameOver || this.board[index]) return;

    console.log(this.board);
    if (!this.board[index]) {
      this.board[index] = this.currentPlayer;
      if (this.currentPlayer === 'X') {
        this.currentPlayer = 'O';
      } else {
        this.currentPlayer = 'X';
      }
    }

    if(
      (this.board[0] === 'X' || this.board[0] === 'O') &&
      (this.board[1] === 'X' || this.board[1] === 'O') &&
      (this.board[2] === 'X' || this.board[2] === 'O') &&
      (this.board[3] === 'X' || this.board[3] === 'O') &&
      (this.board[4] === 'X' || this.board[4] === 'O') &&
      (this.board[5] === 'X' || this.board[5] === 'O') &&
      (this.board[6] === 'X' || this.board[6] === 'O') &&
      (this.board[7] === 'X' || this.board[7] === 'O') &&
      (this.board[8] === 'X' || this.board[8] === 'O')
    )
    {
        this.winText = 'tie :(';
    };


    if (
      (this.board[0] === 'X' && this.board[1] === 'X' && this.board[2] === 'X') ||
      (this.board[0] === 'X' && this.board[3] === 'X' && this.board[6] === 'X') ||
      (this.board[0] === 'X' && this.board[4] === 'X' && this.board[8] === 'X') ||
      (this.board[6] === 'X' && this.board[4] === 'X' && this.board[2] === 'X') ||
      (this.board[2] === 'X' && this.board[5] === 'X' && this.board[8] === 'X') ||
      (this.board[6] === 'X' && this.board[7] === 'X' && this.board[8] === 'X') ||
      (this.board[3] === 'X' && this.board[4] === 'X' && this.board[5] === 'X') ||
      (this.board[1] === 'X' && this.board[4] === 'X' && this.board[7] === 'X')
    ) {
      console.log('x :)')
      this.board.forEach((_,square) => {
        // this.board[square] = '';
        this.gameOver = true;
      })
      this.winText = 'X has won'
    }
    if (
      (this.board[0] === 'O' && this.board[1] === 'O' && this.board[2] === 'O') ||
      (this.board[0] === 'O' && this.board[3] === 'O' && this.board[6] === 'O') ||
      (this.board[0] === 'O' && this.board[4] === 'O' && this.board[8] === 'O') ||
      (this.board[6] === 'O' && this.board[4] === 'O' && this.board[2] === 'O') ||
      (this.board[2] === 'O' && this.board[5] === 'O' && this.board[8] === 'O') ||
      (this.board[6] === 'O' && this.board[7] === 'O' && this.board[8] === 'O') ||
      (this.board[3] === 'O' && this.board[4] === 'O' && this.board[5] === 'O') ||
      (this.board[1] === 'O' && this.board[4] === 'O' && this.board[7] === 'O')
    ) {
       this.board.forEach((_,square) => {
        // this.board[square] = '';
        this.gameOver = true;
      })
      console.log('o :)');
      this.winText = 'O has won'
    }
  }

  resetBoard(){
     this.board.forEach((_,square) => {
        this.board[square] = ''
        this.winText = '';
        this.gameOver = false;
      });
  }
}