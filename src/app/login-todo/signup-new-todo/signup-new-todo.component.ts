import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/userinfo.service';

@Component({
  selector: 'app-signup-new-todo',
  templateUrl: './signup-new-todo.component.html',
  styleUrls: ['./signup-new-todo.component.css']
})
export class SignupNewTodoComponent implements OnInit {

  signupForm: any = [];
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private userinfo: UserInfoService) {
    this.signupForm = this.fb.group({
      first_name: [' '],
      last_name: [' '],
      username: [' '],
      password: [' '],
    })
  }

  ngOnInit(): void {
  }
  signup() {
    this.userinfo.signUpApplication(this.signupForm.value)
      .subscribe((data) => {
        if (data.result[0] = "SUCCESS") {
          this.login()
        }
      });
    this.signupForm.reset();
  }
  login() {
    this.router.navigate(['login']);
  }
}
