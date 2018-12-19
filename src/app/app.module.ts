import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ErrorAdviceComponent } from './error-advice/error-advice.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ErrorAdviceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
