import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosAPI = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

  constructor( private http: HttpClient) { }

  getTodos(): any{
    // REST API URL: https://jsonplaceholder.typicode.com/todos?_limit=5
    // HTTP Method: GET
    // REST API Client Tool: HttpClient

    return this.http.get<any[]>(this.todosAPI);
  }

}
