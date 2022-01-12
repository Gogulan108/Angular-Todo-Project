import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTodoComponent } from './home-todo/create-todo/create-todo.component';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { TodoEditComponent } from './home-todo/todo-list/todo-edit/todo-edit.component';
import { TodoListComponent } from './home-todo/todo-list/todo-list.component';
import { LoginTodoComponent } from './login-todo/login-todo.component';
import { SignupNewTodoComponent } from './login-todo/signup-new-todo/signup-new-todo.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '',component: HomeTodoComponent},
  { path: 'signup', component: SignupNewTodoComponent},
  { path: 'login', component: LoginTodoComponent},
  { path: 'home', component: HomeTodoComponent},
  { path: 'create-todo', component: CreateTodoComponent},
  { path: 'todo-list', component: TodoListComponent},
  { path: 'edit', component: TodoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
