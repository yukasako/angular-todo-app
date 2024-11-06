import { Component, CSP_NONCE, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../service/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  // Service注入
  constructor(private todoService: TodoService) {}
  @Input({ required: true }) todo!: Todo;

  editTodo() {
    // 開閉
    this.todoService.openDialog = true;
    // 編集したいtodoの情報を代入
    this.todoService.action = 'edit';
    this.todoService.currentListId = this.todo.listId;
    this.todoService.currentTodo = this.todo;
  }

  get openDialog() {
    return this.todoService.openDialog;
  }
}
