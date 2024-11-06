import { Component, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo, TodoList } from '../../service/todo.model';

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
    this.todoService.currentTodo = this.todo;
    const currentList = this.todoService.todoLists.find(
      (list) => list.listId === this.todo.listId
    );
    if (currentList) {
      this.todoService.currentList = currentList;
    }
  }

  get openDialog() {
    return this.todoService.openDialog;
  }
}
