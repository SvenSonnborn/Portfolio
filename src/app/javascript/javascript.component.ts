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
  javascriptprojects: any[] = [
    {
      name: 'El pollo loco',
      img: 'PoloLoco',
      text: 'Object-Oriented JS game',
    },
    {
      name: 'Join Project',
      img: 'kanban',
      text: 'Kanban board, with small backend, and drag&drop taskbar',
    },
  ];
}
