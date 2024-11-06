export type Todo = {
  id: number;
  title: string;
  description: string;
  listId: number;
};

// export type TodoList = {
//   listId: number;
//   listName: string;
//   todos?: Todo[];
// };

export type TodoList = {
  listId: number;
  listName: string;
};

export type TodoLists = TodoList[];

// const todoLists = [
//   {
//     listId: 1,
//     listName: 'Todo',
//     todos: [
//       {
//         id: 1,
//         title: 'Todo Title',
//         description: 'Todo Description',
//         listId: 1,
//       },
//       {
//         id: 2,
//         title: '2- Todo Title',
//         description: '2- Todo Description',
//         listId: 1,
//       },
//     ],
//   },
//   {
//     listId: 2,
//     listName: 'Doing',
//     todos: [
//       {
//         id: 3,
//         title: '3- Todo Title',
//         description: 'Todo Description',
//         listId: 1,
//       },
//       {
//         id: 4,
//         title: '4- Todo Title',
//         description: '2- Todo Description',
//         listId: 1,
//       },
//     ],
//   },
// ];
