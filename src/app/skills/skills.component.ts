import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  Directive,
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

  skillsJSON: any[] = [
    {"name" : 'Javascript',       "Icon" : 'java script',   "class" : 'fly-in-left'},
    {"name" : 'Angular',          "Icon" : 'angular2',      "class" : 'grow'},
    {"name" : 'HTML / CSS',       "Icon" : 'html',          "class" : 'fly-in-right'},
    {"name" : 'SCRUM',            "Icon" : 'scrum',         "class" : 'fly-in-left'},
    {"name" : 'GIT',              "Icon" : 'git',           "class" : 'grow'},
    {"name" : 'Design Thinking',  "Icon" : 'pen',           "class" : 'fly-in-right'},
    {"name" : 'Rest API',         "Icon" : 'api',           "class" : 'fly-in-left'},
    {"name" : 'Test automation',  "Icon" : 'test',          "class" : 'grow'},
    {"name" : 'Databases',        "Icon" : 'database',      "class" : 'fly-in-right'}
  ];
  
  handleViewChange(event: any) {
    console.log(event);
  }
  
  divisableby2(){
    return this.skillsJSON.length % 2 === 0
  }
}
