import {Component, OnInit} from '@angular/core';

@Component({
  //   selector: '[app-servers]', // тогда можно будет использовать в app.component.html через <div app-servers></div>
  // selector: '.app-servers',  // тогда можно будет использовать в app.component.html через <div class="app-servers"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }
}
