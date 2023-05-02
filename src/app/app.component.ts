import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs";
import {Post} from './post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post<{name: string}>('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
    });
    console.log(postData);
  }

  onFetchPosts() {
   this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
//https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/
   private fetchPosts() {
    this.http
      .get<{[key: string]: Post}>('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({...responseData[key], id: key});
          }
        }
        return postArray;
      }))
      .subscribe(data => {
        console.log([data]);
        this.loadedPosts = data;
      })
   }
}
