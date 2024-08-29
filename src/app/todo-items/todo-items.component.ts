import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todos';
@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})

export class TodoItemsComponent {

@Input() todo! : Todo;
@Input() i: number = 0;

@Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("You clicked on me from Child component");
}
onCheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
}
}