import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
  ]
})
export class TodosComponent implements OnInit {

  todoList: any[] = [];

  constructor( private todoService: TodoService) { }

  ngOnInit(): void {
    // req todos from the REST API thru service
    this.todoService.getTodos()
      .subscribe( (res: any[]) => {
        console.log('=====================')
        console.log(res);
        this.todoList = res;
      })
  }

}
