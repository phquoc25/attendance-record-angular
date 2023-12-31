import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Player } from 'src/app/player/player.model';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players$: Observable<Player[]>;
  private url$: Observable<string>;
  constructor(private readonly httpClient: HttpClient, private readonly configService: ConfigurationService) {
    this.url$ = this.configService.getConfig().pipe(
      map(config => config.playerUrl)
    );
    this.players$ = this.url$.pipe(
      switchMap(url => httpClient.get<Player[]>(`${url}/attendees`)
      ));
  }
  save(player: Player): Observable<Player> {
    return this.url$.pipe(
      switchMap(url => this.httpClient.post<Player>(`${url}/attendees`, player)
      ));
  }

  remove(id: string): Observable<string> {
    return this.url$.pipe(
      switchMap(url => this.httpClient.delete<string>(`${url}/admin/attendees/${id}`)
      ));
  }

  getAllPlayers(): Observable<Player[]> {
    return this.players$;
  }
}
