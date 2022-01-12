import { Component, OnInit } from '@angular/core';
import { StorageSessionService } from '../storage-session.service';

@Component({
  selector: 'app-home-todo',
  templateUrl: './home-todo.component.html',
  styleUrls: ['./home-todo.component.css']
})
export class HomeTodoComponent implements OnInit {
  constructor(
    private sessionStorage:StorageSessionService
  ) { }

  ngOnInit(): void {
    
  }

}
