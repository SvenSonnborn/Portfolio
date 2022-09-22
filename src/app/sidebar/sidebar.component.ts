import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Input() active: boolean = false;


  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  changeActive(index: boolean) {
    this.active = index;
  }

  opened = false;
  hide = true;

  close() {
    this.sidenav.close();
  }

  openCV(){
    window.open('./assets/CV/CV-SvenSonnborn.pdf', '_blank');
}
}
