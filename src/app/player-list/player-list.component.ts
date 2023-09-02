import { Component, Input } from '@angular/core';
import { Player } from '../player/player.model';
import { Dialog } from '@angular/cdk/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { UserService } from '../core/user/user.service';
import { PlayerService } from '../core/player/player.service';
import { filter, switchMap } from 'rxjs';

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
    if (players) {
      this._players = players;
      this.tuesdayCount = players.filter(player => player.tuesdayOn).length;
      this.tuesdayStatus = this.tuesdayCount >= 4 ? PlayerListComponent.HAPPY_ICON : PlayerListComponent.UN_HAPPY_ICON;
      this.thursdayCount = players.filter(player => player.thursdayOn).length;
      this.thursdayStatus = this.thursdayCount >= 4 ? PlayerListComponent.HAPPY_ICON : PlayerListComponent.UN_HAPPY_ICON;
    }
  }
  get players(): Player[] {
    return this._players;
  }
  constructor(private readonly dialog: Dialog,
    private readonly userService: UserService,
    private readonly playerService: PlayerService,
  ) { }

  onRegisterClick(): void {
    const dialogRef = this.dialog.open<Player>(RegisterDialogComponent, {
      width: '500px',
      height: '250px',
      panelClass: 'custom-dialog',
      disableClose: true,
      data: {
        player: this.userService.getCurrentUser()
      }
    });

    dialogRef.closed.pipe(
      filter(player => !!player),
      switchMap(player => this.playerService.save(player))
    ).subscribe(player => this.updatePlayers(player));
  }

  private saveCurrentUser(player: Player): void {
    this.userService.saveCurrentUser(player);
  }

  private updatePlayers(newPlayer: Player): void {
    this.saveCurrentUser(newPlayer);
    const oldPlayers = this.players.filter(player => player.id !== newPlayer.id);
    this.players = [...oldPlayers, newPlayer];
  }
}
