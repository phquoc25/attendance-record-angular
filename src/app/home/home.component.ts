import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player.model';
import { PlayerService } from '../core/player/player.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  players: Observable<Player[]>;
  constructor(private readonly playerService: PlayerService) {}
  ngOnInit(): void {
    this.players = this.playerService.getAllPlayers();
  }
}
