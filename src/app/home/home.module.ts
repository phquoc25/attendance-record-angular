import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { PlayerListComponent } from '../player-list/player-list.component';
import { PlayerComponent } from '../player/player.component';
import { DialogModule } from '@angular/cdk/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    HomeComponent,
    PlayerListComponent,
    PlayerComponent,
    RegisterDialogComponent
  ],
  imports: [
    ShareModule,
    FormsModule,
    DialogModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
