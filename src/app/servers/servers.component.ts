import { Component } from '@angular/core';

@Component({
  //   selector: '[app-servers]', // тогда можно будет использовать в app.component.html через <div app-servers></div>
  // selector: '.app-servers',  // тогда можно будет использовать в app.component.html через <div class="app-servers"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
