import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { InViewPortService } from '../in-view-port.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  active: boolean = false;

  constructor(public router: Router) { }
  ngOnInit() {
  }

  changeActive(index: boolean){
    this.active = index;
  }
  
}
