import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Todo } from '../../Todos';
import { CommonModule } from '@angular/common';
import { TodoItemsComponent } from "../todo-items/todo-items.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemsComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null = null;
  todos: Todo[] = [];
 

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem("todos");
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  DeleteTodo(todo: Todo) {
    console.log("Delete todo", todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  }

  addTodo(todo: Todo) {
    console.log("Add todo", todo);
    this.todos.push(todo);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  toggelTodo(todo: Todo) {
    console.log("Checkbox click", todo);

    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}



/*!SECTION Code with Harry Code
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todos';
import { CommonModule } from '@angular/common';
import { TodoItemsComponent } from "../todo-items/todo-items.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemsComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']  // Corrected property
})
export class TodosComponent   {
  localItem: string ;
  todos: Todo[];   
  
  constructor() {
  this.localItem = localStorage.getItem("todos") as string;
  if (this.localItem === null) {
    this.todos = [];
  } else {
    this.todos = JSON.parse(this.localItem);
  }
  
  }

  DeleteTodo(todo: Todo) {
    console.log("Delete todo", todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

 
  addTodo(todo: Todo) {
    console.log("Add todo", todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
*/