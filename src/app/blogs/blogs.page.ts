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
  public blogInput: string;

  constructor(private blogApi: BlogApi) {
    this.getBlogs();
  }

  getBlogs(){
    console.log("fetching Blogs...");
    this.blogApi.getBlogs().then(data => this.blogs = data);
  }

  ionViewDidLoad(){
    this.getBlogs();
  }

  itemTapped($event, blog: Blog){
    this.likeBlog(blog.id);
  }

  async likeBlog(id: string){
    console.log("liking Blog...");
    await this.blogApi.likeBlogPost(id);
    await this.getBlogs();
  }

  async addNewBlog(content: string){
    if(content == null || content.trim() == ''){
      console.log("invalid input...");
      return;
    }
    console.log("adding new Blog..." + content);
    await this.blogApi.addBlog(content);
    await this.getBlogs();
    this.blogInput = ""
  }

  async addDummyData(){
    await this.blogApi.addDummyBlogs();
    await this.getBlogs();
  }
}
