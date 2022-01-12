import { DatePipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskModel } from "src/app/todo.model";
import { UserInfoService } from "src/app/userinfo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todoList: TaskModel[] = [];
  editData?: TaskModel;
  isedit: boolean = false;
  islist: boolean = true;
  todoData: TaskModel = new TaskModel();

  constructor(
    private userinfo: UserInfoService,
    private router: Router,
    private http: HttpClient,
    private date: DatePipe
  ) {}

  ngOnInit(): void {
    this.gettodo();
  }

  editTodo(data?: number) {
    this.isedit = true;
    this.userinfo.getEditTodo(data!).subscribe((response) => {
      console.log(response);
      this.todoData.end_date = response.end_date;
      this.todoData.start_date = response.start_date;
      this.todoData.status = response.status;
      this.todoData.task_description = response.task_description;
      this.todoData.task_name = response.task_name;
      this.todoData.priority = response.priority;
      this.todoData.id = response.id;
      this.todoData.start_date = this.date.transform(
        this.todoData.start_date,
        "yyyy-MM-dd"
      )!;
      this.todoData.end_date = this.date.transform(
        this.todoData.end_date,
        "yyyy-MM-dd"
      )!;
    });
  }

  updateTodo() {
    this.todoData.start_date = this.date.transform(
      this.todoData.start_date,
      "dd-MM-yyyy"
    )!;
    this.todoData.end_date = this.date.transform(
      this.todoData.end_date,
      "dd-MM-yyyy"
    )!;
    console.log(this.todoData);
    this.userinfo
      .updateDataTodo(this.todoData)
      .subscribe((data) => {
        console.log(data);
      });
  }

  delete(id?: number) {
    this.userinfo.deleteTodo(id!).subscribe((data) => {
      if (data.status == "success") {
        this.todoList = [];
        this.gettodo();
      }
    });
  }

  gettodo() {
    this.userinfo.getListTodo().subscribe((res) => {
      for (let key in res.result.data) {
        this.todoList.push(res.result.data[key]);
      }
      console.log(this.todoList);
    });
  }
}
