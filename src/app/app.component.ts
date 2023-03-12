import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElement = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  eventList = [0];
  oddList = [0];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElement.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  addEvent(eventData: { id: number }) {
    console.log("добавлен элемент")
    let number = eventData.id;
    if (eventData.id % 2 == 0) {
      this.eventList.push(number)
    } else {
      this.oddList.push(number)
    }
  };
}
