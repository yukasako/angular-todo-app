import { Component, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) listId!: number;

  // Service注入
  constructor(private todoService: TodoService) {}
  editTodo() {
    this.todoService.openDialog = true;
  }

  get currentTodo() {
    const todoList = this.todoService.todoLists.find(
      (todoList) => todoList.listId === this.listId
    );
    return todoList?.todos.find((todo) => todo.id === this.id);
  }
}
