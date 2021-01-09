import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskService } from '../task.service';

import { TaskComponent } from './components/task.component';
import { TaskListComponent } from './components/task-list.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    PureTaskListComponent,
  ],
  imports: [BrowserModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
