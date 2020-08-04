import { Component } from '@angular/core';
import { BlogApi } from '../blog-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'blogs.page.html',
  styleUrls: ['blogs.page.scss']
})
export class Tab1Page {

  public blogs: any;

  constructor(private blogApi: BlogApi) {
    this.getBlogs();
  }

  getBlogs(){
    console.log("Getting Blogs...");
    this.blogApi.getBlogs().then(data => this.blogs = data);
  }

  ionViewDidLoad(){
    console.log("Getting Blogs...");
    this.blogApi.getBlogs().then(data => this.blogs = data);
  }

  itemTapped($event, blog){
    this.blogApi.likeBlogPost();
  }

}
