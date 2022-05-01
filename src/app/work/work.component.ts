import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  @Input() all = true;
  @Input() angular = false;
  @Input() javascript = false;

  constructor() { }

  ngOnInit(): void {
  }

}
