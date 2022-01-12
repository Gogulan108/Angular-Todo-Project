import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginTodoComponent } from './login-todo/login-todo.component';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { CreateTodoComponent } from './home-todo/create-todo/create-todo.component';
import { TodoListComponent } from './home-todo/todo-list/todo-list.component';
import { TodoEditComponent } from './home-todo/todo-list/todo-edit/todo-edit.component';
import { SignupNewTodoComponent } from './login-todo/signup-new-todo/signup-new-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginTodoComponent,
    HomeTodoComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodoEditComponent,
    SignupNewTodoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
