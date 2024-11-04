import { Component, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}
  @Input({ required: true }) listId!: number;

  // Render
  get todoList() {
    return this.todoService.todoLists.find(
      (todoList) => todoList.listId === this.listId
    );
  }

  // Input用
  get openDialog() {
    return this.todoService.openDialog;
  }
  addTodo() {
    this.todoService.openDialog = true;
    //
    this.todoService.currentListId = this.listId;
  }

  // Console.log用
  // onSelect(): void {
  //   console.log(this.todoList);
  // }
}
