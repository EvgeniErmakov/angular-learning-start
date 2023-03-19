import { Component } from '@angular/core';
import { LoggingSevice } from '../logging.sevice';
import {AccountService} from "../account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers: [LoggingSevice]
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingSevice, private accountService: AccountService) {
    // с помощью subscribe мы подписываемся на прослушку приходящих событий, метод находится в сервисе
    this.accountService.statusUpdated.subscribe((status:string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
 //   this.loggingService.logStatusChange(accountName);
  }
}
