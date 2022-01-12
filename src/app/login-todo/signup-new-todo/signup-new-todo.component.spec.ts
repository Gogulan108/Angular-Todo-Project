import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupNewTodoComponent } from './signup-new-todo.component';

describe('SignupNewTodoComponent', () => {
  let component: SignupNewTodoComponent;
  let fixture: ComponentFixture<SignupNewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupNewTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupNewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
