import { Component } from '@angular/core';
import { TaskService } from '../../task.service';
@Component({
  selector: 'app-inbox-screen',
  template: `
    <app-pure-inbox-screen [error]="taskService.isError$ | async"></app-pure-inbox-screen>
  `,
})
export class InboxScreenComponent {
  constructor(public taskService: TaskService) {}
}
