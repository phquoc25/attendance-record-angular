import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { PlayerComponent } from '../player/player.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    PlayerListComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class HomeModule { }
