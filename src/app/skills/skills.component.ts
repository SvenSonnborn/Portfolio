import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { InViewPortService } from '../in-view-port.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(public inviewport: InViewPortService) { }

  ngOnInit(): void {
  }
  
  handleViewChange(event: any) {
    console.log(event);
  }
}
