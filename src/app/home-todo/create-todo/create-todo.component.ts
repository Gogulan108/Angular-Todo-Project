import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserInfoService } from "src/app/userinfo.service";
import { DatePipe } from "@angular/common";
import { TaskModel } from "src/app/todo.model";

@Component({
  selector: "app-create-todo",
  templateUrl: "./create-todo.component.html",
  styleUrls: ["./create-todo.component.css"],
})
export class CreateTodoComponent implements OnInit {
  createForm: any = [];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userinfo: UserInfoService,
    private date: DatePipe
  ) {
    this.createForm = this.fb.group({
      task_name: [" "],
      task_description: [" "],
      status: [" "],
      priority: [" "],
      start_date: [" "],
      end_date: [" "],
    });
  }

  ngOnInit(): void {}
  create() {
    this.createForm.value.start_date = this.date.transform(
      this.createForm.value.start_date,
      "dd-MM-yyyy"
    );
    this.createForm.value.end_date = this.date.transform(
      this.createForm.value.end_date,
      "dd-MM-yyyy"
    );
    this.userinfo.createNewTodo(this.createForm.value).subscribe((data) => {
      if (data.status == "success") {
        alert("Successfully Added");
      }
    });
    this.createForm.reset();
  }
}
