import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Mydt'
  identity = 'PH13712'
  champs = [
    {
      name: 'Azir',
      dmg: 54.8,
      def: 22.04,
      speed: 335,
      price: 10000,
      avatar: 'https://lienminh.garena.vn/images/icons/Azir.png',
    },
    {
      name: 'Diana',
      dmg: 56.04,
      def: 34.6,
      speed: 345,
      price: 10000,
      avatar: 'https://lienminh.garena.vn/images/icons/Diana.png',
    },
    {
      name: 'Gnar',
      dmg: 62,
      def: 34.5,
      speed: 325,
      price: 10000,
      avatar: 'https://lienminh.garena.vn/images/icons/Gnar.png',
    }

  ];
}
