import { Component } from '@angular/core';
import { PlayerService } from 'src/app/core/player/player.service';
import { Player } from 'src/app/player/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  players: Player[];
  displayedColumns: string[] = ['name', 'tuesdayOn', 'thursdayOn', 'delete'];
  constructor(private readonly playerService: PlayerService) {
    this.playerService.getAllPlayers().subscribe(players => this.players = players);
  }

  deletePlayer(player: Player): void {
    this.playerService.remove(player.id).subscribe(removedId => this.removePlayer(removedId));
  }
  private removePlayer(removedId: string): void {
    this.players = [...this.players.filter(pl => pl.id !== removedId)];
  }
}
