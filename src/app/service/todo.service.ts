import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  // Dialogの開閉
  openDialog = false;
  currentListId = 0;

  public todoLists = [
    {
      listId: 1,
      listName: 'Todo',
      todos: [
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
      ],
    },
    {
      listId: 2,
      listName: 'Doing',
      todos: [
        {
          id: 3,
          title: '3- Todo Title',
          description: 'Todo Description',
          listId: 1,
        },
        {
          id: 4,
          title: '4- Todo Title',
          description: '2- Todo Description',
          listId: 1,
        },
      ],
    },
    {
      listId: 3,
      listName: 'Doing',
      todos: [
        {
          id: 3,
          title: '3- Todo Title',
          description: 'Todo Description',
          listId: 1,
        },
        {
          id: 4,
          title: '4- Todo Title',
          description: '2- Todo Description',
          listId: 1,
        },
      ],
    },
  ];
}
