import { Injectable } from '@angular/core';
import { StorageKey } from './storage-key.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getObject<T>(key: StorageKey): T {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return undefined;
  }
  setObject<T>(key: StorageKey, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
