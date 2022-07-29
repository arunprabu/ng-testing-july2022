import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // important as we have dep inj of http client in our service
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TodoService);
  });

  // setting up spy 
  beforeEach( ()=> {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new TodoService(httpClientSpy); 
  })  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch expected todoList thru http call', ( done: DoneFn) => {
    // let's have mock todo list data
    const mockTodoList = [{
      id: 10,
      title: 'unit testing ng',
      completed: true
    },
    {
      id: 11,
      title: 'spying service method',
      completed: false
    }];

    // mocking to get mockTodoList as response if get method is called
    httpClientSpy.get.and.returnValue(of(mockTodoList)); 

    service.getTodos().subscribe({
      next: (res: any) => {
        console.log('**********');
        console.log(res);
        // let's have expectation 
        expect(res).toEqual(mockTodoList);
        done();
      },
      error: done.fail
    });
  });

  // TODO: Mock the error case using spy 

});
