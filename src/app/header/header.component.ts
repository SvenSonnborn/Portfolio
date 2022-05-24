import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InViewPortService } from '../in-view-port.service';
import { ViewportScroller } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() active: boolean = false;

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

  changeActive(index: boolean){
    this.active = index;
  }

}
