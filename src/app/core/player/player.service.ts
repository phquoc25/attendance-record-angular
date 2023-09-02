import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from 'src/app/player/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [
    {
      "id": 1560018929026,
      "name": "Quoc",
      "avatar": "images/avatar5.png",
      "tuesdayOn": false,
      "thursdayOn": true
    },
    {
      "id": 1560018929039,
      "name": "Huy",
      "avatar": "images/avatar3.png",
      "tuesdayOn": true,
      "thursdayOn": true
    },
    {
      "id": 1560018929052,
      "name": "Truong",
      "avatar": "images/avatar4.png",
      "tuesdayOn": true,
      "thursdayOn": true
    },
    {
      "id": 1560018929064,
      "name": "Nguyen",
      "avatar": "images/avatar1.png",
      "tuesdayOn": false,
      "thursdayOn": true
    },
    {
      "id": 1560018929076,
      "name": "My Han",
      "avatar": "images/avatar2.png",
      "tuesdayOn": true,
      "thursdayOn": true
    },
  ];

  save(player: Player): Observable<Player> {
    if(player.id) {
      return of(player);
    }
    return of({...player, id: new Date().getMilliseconds()})
  }

  getAllPlayers(): Observable<Player[]> {
    return of(this.players);
  }
}
