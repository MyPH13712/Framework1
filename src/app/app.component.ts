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
      dmg: 548,
      def: 22.04,
      speed: 335,
      price: 2500,
      avatar: 'https://lienminh.garena.vn/images/icons/Azir.png',
    },
    {
      name: 'Diana',
      dmg: 473,
      def: 34.6,
      speed: 345,
      price: 3100,
      avatar: 'https://lienminh.garena.vn/images/icons/Diana.png',
    },
    {
      name: 'Gnar',
      dmg: 620,
      def: 34.5,
      speed: 325,
      price: 10000,
      avatar: 'https://lienminh.garena.vn/images/icons/Gnar.png',
    }

  ];

  //su kien
  showStatus = true;
  onClickBtn() {
    console.log("Btn clicked");
    this.showStatus = !this.showStatus;
  }


  inputValue = {
    name: '',
    dmg: '',
    def: '',
    speed: '',
    price: '',
    avatar: ''
  }
  onInput(event: any, key: 'name' | 'dmg' | 'def' | 'speed' | 'price' | 'avatar') {
    this.inputValue[key] = event.target.value;
  }

  onSubmit() {
    console.log('Giá trị obj', this.inputValue);
    this.champs.push({
      ...this.inputValue,
      dmg: +this.inputValue.dmg,
      def: +this.inputValue.def,
      speed: +this.inputValue.speed,
      price: +this.inputValue.price,
    });
    this.inputValue = {
      name: '',
      dmg: '',
      def: '',
      speed: '',
      price: '',
      avatar: ''
    }
  }
}
