import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InViewPortService } from '../in-view-port.service';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  navOpened = false;

  ngOnInit(): void {
  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  toggleNav(event: any) {
    console.log(event);
    this.navOpened = !this.navOpened;
  }

}
