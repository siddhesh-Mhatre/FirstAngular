 
import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from "./todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngular';
}