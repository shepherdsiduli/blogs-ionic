import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { compileFunction } from 'vm';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class BlogApi {

  private baseUrl = 'http://localhost:8080';

  private blogsData: any = {}

  constructor(public http: HttpClient) {
   }

   getBlogs(){
      return new Promise(resolve => this.http.get(`${this.baseUrl}/get` ).subscribe(res => resolve(res))) 
   }

   likeBlogPost(id: string){
    console.log('liking blog ' + id);
     return new Promise(resolve => this.http.post(`${this.baseUrl}/like?id=${id}`, null).subscribe(res => console.log("res", res))) 
   }

   addBlog(content: string){
    return new Promise(resolve => {
      console.log("add blog");
      return new Promise(resolve => this.http.post(`${this.baseUrl}/like?content=${content}`, null).subscribe(res => console.log("res", res))) 
    })
   }
}
