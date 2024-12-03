import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';
import { type TodoLists } from './service/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Service注入
  constructor(private todoService: TodoService) {}

  title = 'angular-todo-app';

  // マウント時にLocalStorageから値を取得
  ngOnInit(): void {
    this.todoService.getLocalStorage();
  }
  get todoLists(): TodoLists {
    return this.todoService.todoLists;
  }

  openTodoListDialog = false;
  createList() {
    this.openTodoListDialog = true;
  }
  // Outputで子から受け取ったイベント
  closeDialog() {
    this.openTodoListDialog = false;
  }
}
