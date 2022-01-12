import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserInfoService } from "../userinfo.service";
import { StorageSessionService } from "../storage-session.service";

@Component({
  selector: "app-login-todo",
  templateUrl: "./login-todo.component.html",
  styleUrls: ["./login-todo.component.css"],
})
export class LoginTodoComponent implements OnInit {
  LoginForm: any = [];
  servicemsg: any;
  errorstatus = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userinfo: UserInfoService,
    private sessionStorage:StorageSessionService
  ) {
    this.LoginForm = this.fb.group({
      username: [""],
      password: [""],
    });
  }

  ngOnInit(): void {}
  logincall() {
    this.userinfo.loginApplication(this.LoginForm.value).subscribe(
      (data) => {
        console.log(data);
        if (data.status == "success") {
          alert("successfully logged");
          this.sessionStorage.store('isloggedin',true);
          this.userinfo.setUser(data.result.username);
          this.userinfo.setToken(data.result.token);
          this.router.navigate(["home"]);
        } else if (data.status == "failed") {
          console.log(data.message);
        }
      },
      (res) => {
        if (res.error.status == "failed") {
          this.servicemsg = res.error.message;
          this.errorstatus = true;
          alert(this.servicemsg);
        }
      }
    );
  }
  signup() {
    this.router.navigate(["signup"]);
  }
}
