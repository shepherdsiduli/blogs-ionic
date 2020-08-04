import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { compileFunction } from 'vm';

@Injectable()
export class BlogApi {

  private baseUrl = 'http://localhost:8080';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; ; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,PUT,OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Accept':'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    })
  }

  constructor(public http: HttpClient) {
   }

   getBlogs(){
      return new Promise(resolve => {
       console.log("get blogs");

     //  this.http.get(`${this.baseUrl}`, { headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:8100' } });
       this.http.get(`${this.baseUrl}/get`, this.httpOptions).subscribe(res => console.log(res));
     }) 
   }

   likeBlogPost(){
    return new Promise(resolve => {
      console.log("like blog");
      this.http.get(`${this.baseUrl}/like`).subscribe(res => console.log(res));
    })
   }

   addBlog(){
    return new Promise(resolve => {
      console.log("add blog");
      this.http.get(`${this.baseUrl}/create`).subscribe(res => console.log(res));
    })
   }
}
