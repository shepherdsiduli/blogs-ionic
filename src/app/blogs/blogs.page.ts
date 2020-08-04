import { Component } from '@angular/core';
import { BlogApi } from '../blog-api.service';

type Blog = {
  id: string
  content: string
  image: any
  likes: number   
}

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
    this.getBlogs();
  }

  itemTapped($event, blog: Blog){
    this.blogApi.likeBlogPost(blog.id);
  }
}
