import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoService } from './services/todo.service';

import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {

  const mockTodoList = [{
    id: 1,
    title: 'unit testing ng',
    completed: false
  },
  {
    id: 2,
    title: 'spying service method',
    completed: false
  }];

  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosComponent ],
      imports: [HttpClientModule], // because our comp uses http client tool
      providers: [
        { 
          provide: TodoService,
          useValue: {
            // mocking service request
            getTodos: () => of(mockTodoList)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // important as we dep inject this service in our comp
    todoService = TestBed.inject(TodoService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have todoList from service [MOCKING API]', () => {
    expect(component.todoList).toEqual(mockTodoList);
  });


  /*
    3 challenges or Disadvantages of testing with direct api req 
    
    1. Time Consuming 
    2. Backend may be down, may be still in dev, might not be stable 
    3. Data inconsistencies may be there

    So, Let's go with mocking API Calls
  */
});
