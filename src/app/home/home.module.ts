import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { PlayerComponent } from '../player/player.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlayerListComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
