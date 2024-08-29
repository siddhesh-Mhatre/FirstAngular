import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

{path: '', component:TodosComponent},
{path:'about',component:AboutComponent}
];
