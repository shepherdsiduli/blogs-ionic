import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'blogs.page.html',
  styleUrls: ['blogs.page.scss']
})
export class Tab1Page {

  constructor() {}

  sayHello(){
    console.log("Hello, World");
  }

}
