import {Post} from "./post.model";
import {map} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    return this.http
      .post<{ name: string }>
      ('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json', postData);
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id: key});
          }
        }
        return postArray;
      }))
  }

  clearPost() {
    return this.http.delete('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json');
  }
}
