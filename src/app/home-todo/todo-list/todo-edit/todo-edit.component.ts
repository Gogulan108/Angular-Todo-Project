import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskModel } from 'src/app/todo.model';
import { UserInfoService } from 'src/app/userinfo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todoData:TaskModel=new TaskModel(); 

  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router,
    private date:DatePipe,private userinfo: UserInfoService) { 
  }

  ngOnInit(): void {
   
  }
  updateTodo(data:NgForm) {
    console.log(this.todoData);
  }

}
