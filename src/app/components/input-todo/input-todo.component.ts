import { Component } from '@angular/core';

import { TodoService } from '../../service/todo.service';
import { Todo, TodoList } from '../../service/todo.model';

@Component({
  selector: 'app-input-todo',
  standalone: false,
  templateUrl: './input-todo.component.html',
  styleUrl: './input-todo.component.css',
})
export class InputTodoComponent {
  constructor(private todoService: TodoService) {}

  // マウント時のtodoをチェックし双方バインディングへ代入
  inputTitle = '';
  inputDescription = '';
  selectedListId = 0;
  ngOnInit() {
    this.inputTitle = this.todoService.currentTodo.title;
    this.inputDescription = this.todoService.currentTodo.description;
    // どのListに所属するかもここで代入。
    this.selectedListId = this.todoService.currentList.listId;
  }

  get action() {
    return this.todoService.action;
  }
  get todoLists() {
    return this.todoService.todoLists;
  }

  closeDialog() {
    this.todoService.openDialog = false;
  }

  selectList() {
    const selectedList = this.todoLists.find(
      (list) => list.listId === Number(this.selectedListId)
    );
    if (selectedList) {
      this.todoService.currentList = selectedList;
    }
  }

  // 追加するリストを取得し、そこへ新しいtodoを作成。
  get currentList() {
    return this.todoService.currentList;
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
      listId: this.currentList.listId,
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
      listId: this.currentList.listId,
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
