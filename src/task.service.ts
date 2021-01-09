import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './app/models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly _tasks = new BehaviorSubject<Task[]>([]);

  readonly tasks$ = this._tasks.asObservable();

  constructor() {
    this.tasks = [
      { id: '1', title: 'Something', state: 'TASK_INBOX' },
      { id: '2', title: 'Something more', state: 'TASK_INBOX' },
      { id: '3', title: 'Something else', state: 'TASK_INBOX' },
      { id: '4', title: 'Something again', state: 'TASK_INBOX' },
    ];
  }

  get tasks(): Task[] {
    return this._tasks.getValue();
  }

  set tasks(value: Task[]) {
    this._tasks.next(value);
  }
  pinTask(id: string) {
    //console.log(`service pin task:${id}`);
    const currentTask = this.tasks.find((x) => x.id === id);
    /* console.log(
      `service pin task currentTask:${JSON.stringify(currentTask, null, 2)}`
    ); */
    if (currentTask) {
      const index = this.tasks.indexOf(currentTask);
      /* console.log(
        `service pin task index:${index}\ncurrentTask:${JSON.stringify(
          currentTask,
          null,
          2
        )}`
      ); */
      this.tasks[index] = {
        ...currentTask,
        state: 'TASK_PINNED',
      };
      this.tasks = [...this.tasks];
    }
    /* console.log(
      `service pin task tasks updated:${JSON.stringify(this.tasks, null, 2)}`
    ); */
  }

  archiveTask(id: string) {
    //console.log(`service archiveTask:${id}`);
    const currentTask = this.tasks.find((x) => x.id === id);
    /* console.log(
      `service archiveTask currentTask:${JSON.stringify(currentTask, null, 2)}`
    ); */
    if (currentTask) {
      const index = this.tasks.indexOf(currentTask);
      /* console.log(
        `service archiveTask index:${index}\ncurrentTask:${JSON.stringify(
          currentTask,
          null,
          2
        )}`
      ); */
      this.tasks[index] = {
        ...currentTask,
        state: 'TASK_ARCHIVED',
      };
      this.tasks = [...this.tasks];
    }
    /* console.log(
      `service archiveTask tasks updated:${JSON.stringify(this.tasks, null, 2)}`
    ); */
  }
}
