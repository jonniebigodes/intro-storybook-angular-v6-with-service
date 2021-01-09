import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { PureTaskListComponent } from './pure-task-list.component';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';

export default {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
} as Meta;

const Template: Story<PureInboxScreenComponent> = (
  args: PureInboxScreenComponent
) => ({
  component: PureInboxScreenComponent,
  moduleMetadata: {
    declarations: [TaskListComponent, PureTaskListComponent, TaskComponent],
    imports: [CommonModule],
  },
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  error: !Default.args.error,
};
