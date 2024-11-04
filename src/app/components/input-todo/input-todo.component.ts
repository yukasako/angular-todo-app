import { Component, Input } from '@angular/core';

import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-input-todo',
  standalone: false,
  templateUrl: './input-todo.component.html',
  styleUrl: './input-todo.component.css',
})
export class InputTodoComponent {
  constructor(private todoService: TodoService) {}

  closeDialog() {
    this.todoService.openDialog = false;
  }

  // 追加するリストを取得
  get currentListId() {
    return this.todoService.currentListId;
  }
  inputTitle = '';
  inputDescription = '';

  saveTodo() {}
}
