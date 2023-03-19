import {Injectable} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService {

  constructor(private counter: CounterService) {
  }

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

 setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.increaseInActiveActions();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter.increaseActiveActions();
  }
}
