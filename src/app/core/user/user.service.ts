import { Injectable } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';
import { Player } from 'src/app/player/player.model';
import { StorageKey } from '../storage/storage-key.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly localStorageService: LocalStorageService) { }
  getCurrentUser(): Player {
    return this.localStorageService.getObject<Player>(StorageKey.CURRENT_USER);
  }
}
