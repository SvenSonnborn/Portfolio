import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { InViewPortService } from '../in-view-port.service';
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor(public inviewport: InViewPortService) { }

  ngOnInit(): void {
  }

  handleViewChange(event: any) {
    console.log(event);
  }

  getAnimationDelay(index: number) {
    return `${index * 450}ms`;
  }
}
