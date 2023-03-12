import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('create') event = new EventEmitter<{id: number}>();
  id: number = 1;
  interval;

  startGame() {
    this.interval = setInterval(this.incrementNumber.bind(this), 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  incrementNumber() {
    this.event.emit({
      id: this.id
    });
    this.id++;
  }

  ngOnInit() {
  }
}
