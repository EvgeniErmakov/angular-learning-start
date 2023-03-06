import { Component } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css']
})
export class PracticingDirectivesComponent {
  showInformation: boolean = false;
  logList = [''];

  activeButton() {
    this.showInformation = !this.showInformation;
    this.logList.push(new Date().toString());
  }

  getColor() {
    return this.logList.length > 5 ? 'blue' : 'green';
  }
}
