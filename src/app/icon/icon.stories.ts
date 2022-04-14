import {moduleMetadata, Meta, Story} from '@storybook/angular';

import {CommonModule} from '@angular/common';

import {action} from '@storybook/addon-actions';

import {NebulaIconComponent} from './icon.component';

export default {
    component: NebulaIconComponent,
    decorators: [
        moduleMetadata({
            declarations: [NebulaIconComponent],
            imports: [CommonModule],
        }),
    ],
    title: 'Icon',
    excludeStories: /.*Data$/,
    argTypes: {
        state: {
            control: {
                type: 'inline-radio',
                options: ['activate', 'deactivate', 'default', 'nostyle', 'setting'],
            },
            defaultValue: 'default',
        },
        updated_at: {
            control: 'date',
        },
    },
} as Meta;

export const actionsData = {
    // create a callback that appears in the actions panel(在storybook下面有一個actions panel)
    SwitchIconItem: action('SwitchIconItem'),
};

// args更動時，component也會動，不須重啟storybook
const Template: Story = (args) => ({
    props: {
        ...args,
        SwitchIconItem: actionsData.SwitchIconItem,
    },
});

// 套用模板  簡化程式 達到reused
export const Default = Template.bind({});
Default.args = {
    icon: {
        src: "../../assets/icon/status_alert_exclamation.svg",
        presets: "small",
        state: "default"
        // labels?: Label[],
        // numberVisibleChips?: number,
    },
};

export const Activate = Template.bind({});
Activate.args = {
    icon: {
        ...Default.args.icon,
        state: 'Activate',
    },
};

export const Deactivate = Template.bind({});
Deactivate.args = {
    icon: {
        ...Default.args.icon,
        state: 'Deactivate',
    },
};
