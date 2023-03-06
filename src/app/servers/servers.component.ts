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
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = 'test';
  username = '';
  serverStatus: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
  }

  setUserName() {
    this.username = '';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit() {
  }
}
