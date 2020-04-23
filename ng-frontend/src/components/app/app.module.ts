import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from '../components/alert/alert.component';
import { TodosComponent } from '../components/todos/todos.component';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
