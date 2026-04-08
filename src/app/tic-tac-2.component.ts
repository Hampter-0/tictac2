import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tic-tac-2',
  standalone: true,
  templateUrl: './tic-tac-2.component.html',
  styleUrls: ['./tic-tac-2.component.css'],
})

export class TicTac2Component {
  constructor(private router: Router) {

  }

  board: string[] = Array(9).fill('');
  winText: string = '';
  currentPlayer: 'X' | 'O' = 'X';
  gameOver: boolean = false;

  goToSuperTictac2() {
    this.router.navigate(['/supertictac2'])
  }

  goToRules(){
    this.router.navigate(['/rules'])
  }

  handleClick(index: number) {
    if (this.gameOver || this.board[index]) return;

    // console.log(this.board);
    if (!this.board[index]) {
      this.board[index] = this.currentPlayer;
      if (this.currentPlayer === 'X') {
        this.currentPlayer = 'O';
      } else {
        this.currentPlayer = 'X';
      }
    }

    const possibleWins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    for (const [a, b, c] of possibleWins) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        if (this.currentPlayer === 'X') {
          this.gameOver = true;
          this.winText = "player O won :)"
        } else {
          this.gameOver = true;
          this.winText = "player X won :)"
        }
      }
    }

    if (!this.board.includes('') && !this.gameOver) {
      this.winText = 'Tie :(';
      this.gameOver = true;
    }
    return null;
  }

  resetBoard() {
    this.gameOver = false;
    this.currentPlayer = 'X'
    this.board.forEach((_, square) => {
      this.board[square] = ''
      this.winText = '';
    });
  }
}