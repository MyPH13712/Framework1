import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.css']
})
export class DamageComponent implements OnInit {
  @Input() champDmg: any;
  constructor() { }

  ngOnInit(): void {
  }

}
