import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {tap} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Перед тем как запросик ушел, вызвансля перехватчик-Interceptor!")
    // принимаемый запрос является имьютабельным (неизменяемым), мы не может в него что-либо добавить, но можем копировать
    // и добавить что-то своё в скопированный запрос. Далее, мы можем в next.handle(out new request) передать и отправить запрос!
    // Пример:
    const modifiedRequest = req.clone({
      headers: req.headers.append('NewHeader', 'Header was added by Interceptors')
    })
    return next.handle(modifiedRequest).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Response) {
        console.log('Response arrived');
        console.log('body, request was intercepted on receipt -> ' + event.body);
      }
    }));
  }
}
