import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  /**
   * Creationarray for ngfor
   * new work = new { name, img, text}
   * @param name : Name of the Work (will be displayed in the overlay topside)
   * @param img : name of the workimage, !! has to be jpg !!
   * @param text : Short explenation of the project ( will be displey in the overlay)
   */
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
