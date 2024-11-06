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
    this.todoService.todos.forEach((todo) => {
      if (todo.id >= id) {
        id = todo.id + 1;
      }
    });

    const newTodo: Todo = {
      id: id,
      title: inputTitle,
      description: inputDescription,
      listId: this.currentListId,
    };
    console.log(newTodo);

    this.todoService.todos.push(newTodo);
    this.closeDialog();
  }

  editTodo() {
    const editedTodo: Todo = {
      id: this.todoService.currentTodo.id,
      title: this.inputTitle,
      description: this.inputDescription,
      listId: this.currentListId,
    };

    const updatedTodos = this.todoService.todos.map((todo) => {
      if (todo.id === this.todoService.currentTodo.id) {
        return { ...todo, ...editedTodo }; // スプレッド構文: 同じプロパティ名があった場合、後から展開したオブジェクトの値で上書き。
      }
      return todo;
    });

    this.todoService.todos = updatedTodos;
    this.closeDialog();
  }

  deleteTodo() {
    const updatedTodos = this.todoService.todos.filter(
      (todo) => todo.id !== this.todoService.currentTodo.id
    );
    this.todoService.todos = updatedTodos;
    this.closeDialog();
  }
}
