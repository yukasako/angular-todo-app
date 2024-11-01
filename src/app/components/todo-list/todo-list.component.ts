import { Component, Input } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input({ required: true }) listId!: number;

  constructor(private todoService: TodoService) {}
  addTodo() {
    this.todoService.openDialog = true;
  }
  get todoList() {
    return this.todoService.todoLists.find(
      (todoList) => todoList.listId === this.listId
    );
  }

  // Console.log用
  // onSelect(): void {
  //   console.log(this.todoList);
  // }
}
