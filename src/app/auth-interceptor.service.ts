import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Перед тем как запросик ушел, вызвансля перехватчик-Interceptor!")
    return next.handle(req);
  }
}
