import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/player/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players$: Observable<Player[]>;
  private url = 'http://localhost:8080/attendees';
  constructor(private readonly httpClient: HttpClient) {
    this.players$ = httpClient.get<Player[]>(this.url);
  }
  save(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(this.url, player);
  }

  getAllPlayers(): Observable<Player[]> {
    return this.players$;
  }
}
