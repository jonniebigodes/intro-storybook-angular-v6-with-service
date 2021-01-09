import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskService } from '../task.service';

import { TaskComponent } from './components/task.component';
import { TaskListComponent } from './components/task-list.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { InboxScreenComponent } from './components/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InboxScreenComponent,
    PureInboxScreenComponent,
    TaskComponent,
    TaskListComponent,
    PureTaskListComponent,
  ],
  imports: [BrowserModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
