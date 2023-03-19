import {Injectable} from "@angular/core";

@Injectable()
export class LoggingSevice {
  logStatusChange(status: string) {
    console.log("Status has been changed -> " + status)
  }
}
