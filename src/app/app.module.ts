import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { InputTodoComponent } from './components/input-todo/input-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    InputTodoComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule],
})
export class AppModule {}
