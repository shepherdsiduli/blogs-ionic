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
     return new Promise(resolve => this.http.post(`${this.baseUrl}/like?id=${id}`, null).subscribe((res)=>resolve(res))) 
   }

   addBlog(content: string){
    return new Promise(resolve => this.http.put(`${this.baseUrl}/create?content=${content}`, null).subscribe((res)=>resolve(res)))
   }

   addDummyBlogs(){
    console.log('adding batch dummy blogs ');
    return new Promise(resolve => this.http.post(`${this.baseUrl}/initialize`, null).subscribe((res)=>resolve(res)));
   }

   deleteBlog(id: string){

   }
}
