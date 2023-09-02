import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { RegisterDialogData } from './register-dialog-data.model';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
  player: Player;
  constructor(public dialogRef: DialogRef<Player>, 
    @Inject(DIALOG_DATA) public data: RegisterDialogData) {
      this.player = data.player;
    }
}
