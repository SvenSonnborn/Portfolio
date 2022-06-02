import { Component, OnInit } from '@angular/core';
import { InViewPortService } from '../in-view-port.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  /**
   * We need the text as a Character Array for *ngFor to work. ['H', 'i', ...]
   */

  introText = [
    'Hi,',
    'My Name is',
    'Sven Sonnborn.',
    'I am a',
    'Front-End',
    'Developer.'
  ];
  textlength = [
    0,
    30,
    130,
    270,
    330,
    420
  ];

  getArrayFromStringArray(string : string){
      return Array.from(string);
  }

  constructor(
    public inviewport: InViewPortService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  handleViewChange(event: any) {
    console.log(event);
  }

  getAnimationDelay(index: number) {
    return `${(100 * index) + (3)}ms`;
  }
}
