import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Creationarray for ngfor
   * new work = new { name, img, text}
   * @param name : Name of the Work (will be displayed in the overlay topside)
   * @param img : name of the workimage, !! has to be jpg !!
   * @param text : Short explenation of the project ( will be displey in the overlay)
   */
  javascriptprojects: any[] = [
    {
      name: 'El pollo loco',
      img: 'PoloLoco',
      text: 'Object-Oriented JS game',
      link: 'https://elpolloloco.svensonnborn.com/',
    },
    {
      name: 'Pokedex',
      img: 'pokedex',
      text: 'Pokedex with rested API',
      link: 'https://pokedex.svensonnborn.com/',
    },
  ];
}
