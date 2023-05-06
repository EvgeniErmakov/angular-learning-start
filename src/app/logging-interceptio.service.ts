import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {tap} from "rxjs";

export class LoggingInterceptioService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Второй перехватчик 1")
    return next.handle(req).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log("Второй перехватчик перехватил ответ с сервера 2")
        console.log('body, второй перехватчик ' + event.body);
      }
    }));
  }

}
