import { Component } from '@angular/core';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-task-list
      [tasks]="taskService.tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `,
})
export class TaskListComponent {
  constructor(public taskService: TaskService) {}
  archiveTask(id: string) {
    //console.log(`TaskList archiveTask:${id}`)
    this.taskService.archiveTask(id);
  }
  pinTask(id: string) {
    //console.log(`TaskList pinTask:${id}`)
    this.taskService.pinTask(id);
  }
}
