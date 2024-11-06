import { Injectable } from '@angular/core';
import { Todo, TodoList } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  public todos: Todo[] = [
    {
      id: 1,
      title: 'Todo Title',
      description: 'Todo Description',
      listId: 1,
    },
    {
      id: 2,
      title: '2- Todo Title',
      description: '2- Todo Description',
      listId: 1,
    },
    {
      id: 3,
      title: '3- Todo Title',
      description: 'Todo Description',
      listId: 2,
    },
    {
      id: 4,
      title: '4- Todo Title',
      description: '2- Todo Description',
      listId: 2,
    },
    {
      id: 5,
      title: '3- Todo Title',
      description: 'Todo Description',
      listId: 3,
    },
    {
      id: 6,
      title: '4- Todo Title',
      description: '2- Todo Description',
      listId: 3,
    },
  ];
  public todoLists: TodoList[] = [
    {
      listId: 1,
      listName: 'Todo',
    },
    {
      listId: 2,
      listName: 'Doing',
    },
    {
      listId: 3,
      listName: 'Done',
    },
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
}
