import { moduleMetadata, Meta, Story } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';

export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'official tutorials/Task',
  excludeStories: /.*Data$/,
  argTypes: {
    state: {
        control: {
          type: 'inline-radio',
          options: ['Task_INBOX', 'TASK_PINNED', 'TASK_ARCHIVED'],
        },
        defaultValue:'Task_INBOX',
    },
    updated_at: {
      control: 'date'
    }
  },
} as Meta;

export const actionsData = {
  // create a callback that appears in the actions panel(在storybook下面有一個actions panel)
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

// args更動時，component也會動，不須重啟storybook
const Template: Story = args => ({
  props: {
    ...args,
    // onPinTask: actionsData.onPinTask,
    // onArchiveTask: actionsData.onArchiveTask,
  },
});

// 套用模板  簡化程式 達到reused
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
