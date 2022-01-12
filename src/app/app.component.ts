import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-app';
  constructor(){

  }
  ngOnInit() {
  }
}

