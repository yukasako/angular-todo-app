export type Todo = {
  id: number;
  title: string;
  description: string;
  listId: number;
};

export type TodoList = {
  listId: number;
  listName: string;
};

export type TodoLists = TodoList[];
