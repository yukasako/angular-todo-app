import { Component } from '@angular/core';

import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-input-todo',
  standalone: false,
  templateUrl: './input-todo.component.html',
  styleUrl: './input-todo.component.css',
})
export class InputTodoComponent {
  constructor(private todoService: TodoService) {}

  toggleDialog() {
    this.todoService.openDialog = !this.todoService.openDialog;
  }

  inputTitle = '';
  inputDescription = '';
}
