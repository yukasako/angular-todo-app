import { Component, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { type TodoList } from '../../service/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}
  @Input({ required: true }) todoList!: TodoList;

  // Input用
  get openDialog() {
    return this.todoService.openDialog;
  }
  get currentListId() {
    return this.todoService.currentListId;
  }

  addTodo() {
    // 開閉
    this.todoService.openDialog = true;
    // 該当リスト指定
    this.todoService.currentListId = this.todoList.listId;
    // currentTodoをダミーに戻す
    this.todoService.currentTodo = {
      id: 0,
      title: '',
      description: '',
      listId: 0,
    };
    // action変更
    this.todoService.action = 'create';
  }
}
