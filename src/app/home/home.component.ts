import { Component } from '@angular/core';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  attendances: Player[] = [
    {
      "id": 1560018929026,
      "name": "Quoc",
      "avatar": "images/avatar5.png",
      "tuesdayOn": false,
      "thursdayOn": true
    },
    {
      "id": 1560018929039,
      "name": "Huy",
      "avatar": "images/avatar3.png",
      "tuesdayOn": true,
      "thursdayOn": true
    },
    {
      "id": 1560018929052,
      "name": "Truong",
      "avatar": "images/avatar4.png",
      "tuesdayOn": true,
      "thursdayOn": true
    },
    {
      "id": 1560018929064,
      "name": "Nguyen",
      "avatar": "images/avatar1.png",
      "tuesdayOn": false,
      "thursdayOn": true
    },
    {
      "id": 1560018929076,
      "name": "My Han",
      "avatar": "images/avatar2.png",
      "tuesdayOn": true,
      "thursdayOn": true
    },
  ];
}
