import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  countInActiveActions: number = 0;
  countActiveActions: number = 0;

  increaseInActiveActions() {
    this.countInActiveActions++;
    console.log("Count of inActiveActions has been increased = " + this.countInActiveActions)
  }

  increaseActiveActions() {
    this.countActiveActions++;
    console.log("Count of activeActions has been increased = " + this.countActiveActions)
  }
}
