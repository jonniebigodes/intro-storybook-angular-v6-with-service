/* import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="list-item">
      <input type="text" [value]="task.title" readonly="true" />
    </div>
  `,
})
export class TaskComponent{
  title: string;
  @Input() task: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();
} */

// simple component updated state
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-task',
  template: `
    <div class="list-item {{ task?.state }}">
      <label class="checkbox">
        <input
          type="checkbox"
          [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
          disabled="true"
          name="checked"
        />
        <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
      </label>
      <div class="title">
        <input
          type="text"
          [value]="task?.title"
          readonly="true"
          placeholder="Input title"
          [ngStyle]="{'background':'red'}"
        />
      </div>
      <div class="actions">
        <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
          <span class="icon-star"></span>
        </a>
      </div>
    </div>
  `,
})
export class TaskComponent {
  /** Composition of the task */
  @Input() task: Task;
  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask: EventEmitter<any> = new EventEmitter();

   /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();
  
  /** Method that invokes the event to change the task to pinned */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /** Method that invokes the event to change the task to archived */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
