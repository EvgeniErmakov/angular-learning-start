import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model'
import {PostsService} from "./posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {
  }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(error => {
      this.error = error;
    });
    this.fetchPosts2();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchPosts2();
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

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
