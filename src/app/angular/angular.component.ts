import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  angularprojects: any[] = [
    {
      name: 'Ring of fire',
      img: 'ringoffire',
      text: 'Angular based cardgame',
    },
    {
      name: 'My Portfolio',
      img: 'portfolio',
      text: 'Portfolio in angular with animations and in view directive',
    },
  ];
}
