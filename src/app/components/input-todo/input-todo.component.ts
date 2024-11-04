import { Component } from '@angular/core';

import { TodoService } from '../../service/todo.service';
import { Todo } from '../../service/todo.model';

@Component({
  selector: 'app-input-todo',
  standalone: false,
  templateUrl: './input-todo.component.html',
  styleUrl: './input-todo.component.css',
})
export class InputTodoComponent {
  constructor(private todoService: TodoService) {}

  closeDialog() {
    this.todoService.openDialog = false;
  }

  // 追加するリストを取得
  get currentListId() {
    return this.todoService.currentListId;
  }

  inputTitle = '';
  inputDescription = '';

  saveTodo(inputTitle: string, inputDescription: string) {
    // id作る。
    let id = 0;
    this.todoService.todoLists.forEach((list) => {
      list.todos.forEach((todo) => {
        if (todo.id >= id) {
          id = todo.id + 1;
        }
      });
    });

    const newTodo: Todo = {
      id: id,
      title: inputTitle,
      description: inputDescription,
      listId: this.currentListId,
    };
    console.log(newTodo);

    // 該当リストを探し、新しいTodoを追加
    this.todoService.todoLists
      .find((list) => list.listId === this.currentListId)
      ?.todos.push(newTodo);

    this.closeDialog();
  }
}
