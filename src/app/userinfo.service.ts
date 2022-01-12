import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TaskModel } from "./todo.model";

@Injectable({
  providedIn: "root",
})
export class UserInfoService {
  user_token: any;
  userName: any;
  editdetails: TaskModel = new TaskModel();
  constructor(private http: HttpClient) {}
  fetchToken() {
    return this.user_token;
  }

  setToken(token: string) {
    this.user_token = token;
  }

  headerFunction() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.fetchToken(),
      }),
    };
    return httpOptions;
  }

  fetchUser() {
    return this.userName;
  }

  setUser(user: string) {
    this.userName = user;
  }

  //when we click edit button this call happen
  getEditTodo(todo_id: number): Observable<TaskModel> {
    return this.http
      .get(
        "https://todo-project-django.herokuapp.com/api/todo/" + todo_id + "/",
        this.headerFunction()
      )
      .pipe(map((response: any) => response.result));
  }

  signUpApplication(value: any): Observable<any> {
    return this.http.post<any>(
      "https://todo-project-django.herokuapp.com/api/signup/",
      value
    );
  }

  loginApplication(value: any): Observable<any> {
    return this.http.post<any>(
      "https://todo-project-django.herokuapp.com/api/login/",
      value
    );
  }

  createNewTodo(value: any): Observable<any> {
    return this.http.post<any>(
      "https://todo-project-django.herokuapp.com/api/todo/",
      value,
      this.headerFunction()
    );
  }

  getListTodo(): Observable<any> {
    return this.http.get<any>(
      "https://todo-project-django.herokuapp.com/api/todo/",
      this.headerFunction()
    );
  }

  updateDataTodo(data: TaskModel) {
    return this.http.put(
      "https://todo-project-django.herokuapp.com/api/todo/" + data.id + "/",
      data,
      this.headerFunction()
    );
  }

  deleteTodo(id: number): Observable<any> {
    let a: any = id;
    let params = new HttpParams().set("task_id", a);
    let headers = new HttpHeaders({
      Authorization: "Bearer " + this.fetchToken(),
    });
    return this.http.delete(
      "https://todo-project-django.herokuapp.com/api/todo/",
      { headers: headers, params: params }
    );
  }
}
