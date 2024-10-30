import { Component } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  // Service注入
  constructor(private todoService: TodoService) {}
  editTodo() {
    this.todoService.openDialog = true;
  }
}
