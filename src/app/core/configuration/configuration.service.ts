import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from './configuration.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private config$: Observable<Configuration>;
  constructor(private readonly httpClient: HttpClient) {
    this.config$ = this.httpClient.get<Configuration>('assets/config.json');
  }
  getConfig() {
    return this.config$;
  }
}
