import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}
  addTodo() {
    this.todoService.openDialog = true;
  }
}
