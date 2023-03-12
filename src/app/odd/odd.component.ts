import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input('odd') element: number;

  constructor() {
  }

  ngOnInit() {
  }
}
