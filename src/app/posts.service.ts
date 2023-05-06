import {Post} from "./post.model";
import {catchError, map, Subject, tap, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import * as events from "events";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<String>();


  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http
      .post<{ name: string }>
      ('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json',
        postData,
        //По умолчанию HttpClient возвращает тело ответа. Чтобы получить полный ответ, можно передать объект с ключом observe, которому присвоено значение ‘response’.
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message());
        });
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello!!'}),
          // Можно задать параметры через конструктор, как на следующей строке
          // params: new HttpParams().set('key!','value!')
          params: new HttpParams()
            .set('firstOne', 'value1')
            .set('secondOne', 'value2')
        })
      .pipe(map(responseData => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        }),
        catchError(err => {
          console.log('словили ошибочку')
          return throwError(err);
        }))
  }

  clearPost() {
    return this.http.delete('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events'
      }
    ).pipe(
      tap(event => {
        console.log(event)
        if (event.type === HttpEventType.Sent) {
          // ...
        }

        if (event.type === HttpEventType.Response) {
          console.log('body -> ' + event.body);
        }
      }));
  }
}
