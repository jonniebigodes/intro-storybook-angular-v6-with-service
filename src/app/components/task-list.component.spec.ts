import { render } from '@testing-library/angular';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { WithPinnedTasks } from './task-list.stories';
describe('TaskList Component', () => {
  test('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const { fixture } = await render(TaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        tasks: WithPinnedTasks.args.tasks,
        loading: false,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    expect(fixture.componentInstance.tasksInOrder[0].id).toBe('6');
  });
});
