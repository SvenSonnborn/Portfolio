import {
  Component,
  OnInit,
} from '@angular/core';
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
  introText1 = [
    ...'Hi,',
  ];
  introText1_1 = [
    ...'My Name is ',
  ];
  introText2 = [
    ...'Sven Sonnborn.',
  ];
  introText3 = [
    ...'I am a ',
  ];
  introText4 = [
    ...'Front-End ',
  ];
  introText5 = [
    ...'Developer.',
  ];
 

  constructor(public inviewport: InViewPortService, private viewportScroller: ViewportScroller) {}
  
  ngOnInit(): void {

  }

  public onClick(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

  handleViewChange(event: any) {
    console.log(event);
  }

  getAnimationDelay1(index: number) {
    return `${10 * index}ms`;
  }

  getAnimationDelay1_1(index: number) {
    return `${(10 * index)+ 35}ms`;
  }

  getAnimationDelay2(index: number) {
    return `${(10 * index)+ 75}ms`;
  }
  getAnimationDelay3(index: number) {
    return `${(10 * index)+ 200}ms`;
  }
  getAnimationDelay4(index: number) {
    return `${(10 * index)+ 270}ms`;
  }
  getAnimationDelay5(index: number) {
    return `${(10 * index)+ 370}ms`;
  }

}
