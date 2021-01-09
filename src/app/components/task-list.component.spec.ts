import { render } from '@testing-library/angular';

import { PureTaskListComponent } from './pure-task-list.component';
import { TaskComponent } from './task.component';
import { WithPinnedTasks } from './pure-task-list.stories';
describe('TaskList Component', () => {
  test('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const { fixture } = await render(PureTaskListComponent, {
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
