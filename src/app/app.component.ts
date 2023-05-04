import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model'
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData.title, postData.content)
      .subscribe(responseData => {
        console.log(responseData);
      });
    console.log(postData);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.clearPost()
      .subscribe(() => {
        this.loadedPosts = [];
      })
  }

//https://ng-complete-guide-63cf7-default-rtdb.firebaseio.com/
  private fetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe(data => {
          this.isFetching = false;
          this.loadedPosts = data;
        },
        handledError => {
          this.error = handledError.message;
          console.log(this.error);
        });
  }


  private fetchPosts2() {
    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe({
        next: (data) => {
          this.isFetching = false;
          this.loadedPosts = data;
        },
        error: (handledError) => {
          this.error = handledError.message;
        }
      });
  }
}
