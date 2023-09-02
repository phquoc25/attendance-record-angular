import { Component, Input } from '@angular/core';
import { Player } from '../player/player.model';
import { Dialog } from '@angular/cdk/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  private static readonly UN_HAPPY_ICON = 'url(assets/images/unhappy.svg)';
  private static readonly HAPPY_ICON = 'url(assets/images/in-love.svg)';
  tuesdayStatus = PlayerListComponent.UN_HAPPY_ICON;
  thursdayStatus = PlayerListComponent.UN_HAPPY_ICON;
  tuesdayCount = 0;
  thursdayCount = 0;
  private _players: Player[];
  @Input() set players(players: Player[]) {
    this._players = players;
    this.tuesdayCount = players.filter(player => player.tuesdayOn).length;
    this.tuesdayStatus = this.tuesdayCount >= 4 ? PlayerListComponent.HAPPY_ICON : PlayerListComponent.UN_HAPPY_ICON;
    this.thursdayCount = players.filter(player => player.thursdayOn).length;
    this.thursdayStatus = this.thursdayCount >= 4 ? PlayerListComponent.HAPPY_ICON : PlayerListComponent.UN_HAPPY_ICON;
  }
  get players(): Player[] {
    return this._players;
  }
  constructor(private readonly dialog: Dialog) {}

  onRegisterClick(): void {
    this.dialog.open(RegisterDialogComponent, {
      width: '400px',
      height: '200px',
      panelClass: 'custom-dialog',
      disableClose: true,
      data: {
        player: this.players[0]
      }
    });
  }
}
