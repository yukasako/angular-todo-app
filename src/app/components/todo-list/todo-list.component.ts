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

  get openDialog() {
    return this.todoService.openDialog;
  }
  get currentList() {
    return this.todoService.currentList;
  }
  get todosOnThisList() {
    const allTodos = this.todoService.todos;
    return allTodos.filter((todo) => todo.listId === this.todoList.listId);
  }

  addTodo() {
    // 開閉
    this.todoService.openDialog = true;
    // 該当リスト指定
    this.todoService.currentList = this.todoList;
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

  deleteList() {
    // Listを消す
    const updatedLists = this.todoService.todoLists.filter(
      (list) => list.listId !== this.todoList.listId
    );
    this.todoService.todoLists = updatedLists;
    // Listの中身も消す。
    const updatedTodos = this.todoService.todos.filter(
      (todo) => todo.listId !== this.todoList.listId
    );
    this.todoService.todos = updatedTodos;
    this.todoService.setLocalStorage();
  }
}
