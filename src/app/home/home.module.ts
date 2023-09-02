import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { PlayerComponent } from '../player/player.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from '@angular/cdk/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    PlayerListComponent,
    PlayerComponent,
    RegisterDialogComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    DialogModule
  ]
})
export class HomeModule { }
