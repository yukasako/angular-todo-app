import { Injectable, OnInit } from '@angular/core';
import { Todo, TodoList } from './todo.model';

// Injectable はAngularのデコレーターで、クラスが依存性注入（DI）システムによってインスタンス化されることを示しています。
@Injectable({
  providedIn: 'root', //このサービスがアプリケーション全体でシングルトンとして提供されることを指定
})
export class TodoService {
  constructor() {}
  public todos: Todo[] = [
    // {
    //   id: 1,
    //   title: '1- Todo Title',
    //   description: 'Todo Description',
    //   listId: 1,
    // },
    // {
    //   id: 2,
    //   title: '2- Todo Title',
    //   description: '2- Todo Description',
    //   listId: 2,
    // },
    // {
    //   id: 3,
    //   title: '3- Todo Title',
    //   description: 'Todo Description',
    //   listId: 3,
    // },
  ];
  public todoLists: TodoList[] = [
    // {
    //   listId: 1,
    //   listName: 'Todo',
    // },
    // {
    //   listId: 2,
    //   listName: 'Doing',
    // },
    // {
    //   listId: 3,
    //   listName: 'Done',
    // },
  ];

  //　現在値の受け渡しをここで。（@Inputだと同期が取れず挙動がおかしかった）
  currentList: TodoList = {
    listId: 0,
    listName: '',
  };
  currentTodo: Todo = {
    id: 0,
    title: '',
    description: '',
    listId: 0,
  };

  // Dialogの開閉
  openDialog = false;

  // EditかCreateか
  action = 'create';

  // Local Storageに保存
  getLocalStorage() {
    const todos = localStorage.getItem(`todos`);
    const todoLists = localStorage.getItem(`todoLists`);
    if (todos) {
      this.todos = JSON.parse(todos);
    }
    if (todoLists) {
      this.todoLists = JSON.parse(todoLists);
    }
  }
  setLocalStorage() {
    localStorage.setItem(`todos`, JSON.stringify(this.todos));
    localStorage.setItem(`todoLists`, JSON.stringify(this.todoLists));
  }
}
