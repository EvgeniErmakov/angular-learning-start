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
  serverCreationStatus = 'No server was created';
  serverName = 'test';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }
}
