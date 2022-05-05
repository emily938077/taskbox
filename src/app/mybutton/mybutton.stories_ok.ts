import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { action } from '@storybook/addon-actions'
import { myButtonComponent } from "./mybutton.component";

export default{
  component: myButtonComponent,
  decorator: [
    moduleMetadata({
      declarations: [myButtonComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Public/myButton',
  parameters:{
    componentSubtitle:"click and dbclick",
    jest:['mybutton.component.spec.ts']
  },
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
        control: {
          type: 'inline-radio',
          options: ['small', 'medium', 'large'],
        },
        defaultValue:'medium',
    },
  }
} as Meta;

const Template: Story<myButtonComponent> = (args: myButtonComponent) => ({
  // component: myButtonComponent,
  props: {
    ...args,
    onDoubleClick: action('onDoubleClick'),
    onCliick: action('onCliick'),
  }
});

export const Default = Template.bind({});
Default.args = {
  // id: '1',
  label: 'press me!',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  primary: false,
};

export const Large = Template.bind({});
Large.parameters = {
  docs: {
    description: {
      story: '16px'
    }
  },
};
Large.args = {
  ...Default.args,
  size: 'large',
  label: 'large!',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
};

export const Disable = Template.bind({});
Disable.parameters = {
  docs: {
    description: {
      story: '禁止使用'
    }
  },
};
Disable.args = {
  ...Default.args,
  disable: true,
};
