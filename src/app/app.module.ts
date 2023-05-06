import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AuthInterceptorService} from "./auth-interceptor.service";
import {LoggingInterceptioService} from "./logging-interceptio.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    // Внимание! Перехватчики работают строго в порядке, в котором они заданые ниже. Поменяешь местами и порядок следом изменится.
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptioService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
