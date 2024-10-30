import { Component } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-todo-app';

  // Service注入
  constructor(private todoService: TodoService) {}
  // openDialogの値を取得
  get openDialog(): boolean {
    return this.todoService.openDialog;
  }
}
