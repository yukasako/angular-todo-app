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

  inputTitle = '';
  inputDescription = '';

  // マウント時のtodoをチェックし代入
  ngOnInit() {
    this.inputTitle = this.todoService.currentTodo.title;
    this.inputDescription = this.todoService.currentTodo.description;
  }

  get action() {
    return this.todoService.action;
  }

  closeDialog() {
    this.todoService.openDialog = false;
  }

  // 追加するリストを取得し、そこへ新しいtodoを作成。
  get currentListId() {
    return this.todoService.currentListId;
  }
  createTodo(inputTitle: string, inputDescription: string) {
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

  editTodo() {
    const editedTodo: Todo = {
      id: this.todoService.currentTodo.id,
      title: this.inputTitle,
      description: this.inputDescription,
      listId: this.currentListId,
    };
    // 次回はここから！
    // let targetTodo = this.todoService.todoLists
    //   .find((list) => list.listId === this.currentListId)
    //   ?.todos.find((todo) => todo.id === this.todoService.currentTodo.id);
    // targetTodo = editedTodo;
  }
}
