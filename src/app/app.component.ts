import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json', postData)
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

   private fetchPosts() {
    this.http
      .get('https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/posts.json')
      .subscribe(getData => {
        console.log(getData)
      })
   }
}
