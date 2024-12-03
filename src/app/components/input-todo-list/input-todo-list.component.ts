import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { TodoList } from '../../service/todo.model';

@Component({
  selector: 'app-input-todo-list',
  standalone: false,
  templateUrl: './input-todo-list.component.html',
  styleUrl: './input-todo-list.component.css',
})
export class InputTodoListComponent {
  constructor(private todoService: TodoService) {}

  // closeするというイベントを発火し親(app)へ。
  @Output() close = new EventEmitter<void>();
  closeDialog() {
    this.close.emit();
  }

  inputListName = '';
  createTodoList(inputListName: string) {
    let newListId = 1;
    this.todoService.todoLists.forEach((list) => {
      if (list.listId >= newListId) {
        newListId = list.listId + 1;
      }
    });
    const newList: TodoList = {
      listId: newListId,
      listName: inputListName,
    };
    this.todoService.todoLists.push(newList);
    this.todoService.setLocalStorage();
    this.closeDialog();
  }
}
