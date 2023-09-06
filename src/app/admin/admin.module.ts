import { NgModule } from '@angular/core';
import { PlayersComponent } from './players/players.component';
import { MatTableModule } from '@angular/material/table';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    ShareModule,
    MatTableModule
  ]
})
export class AdminModule { }
