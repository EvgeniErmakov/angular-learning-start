import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  number: number = 0;
  serverList = ['server1','server2','server3'];

  constructor() {
    this.number = this.serverList.length;
  }

  addServer() {
    this.number++;
    this.serverList.push("server" + this.number);
  }
}
