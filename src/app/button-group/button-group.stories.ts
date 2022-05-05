import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import { action } from "@storybook/addon-actions";
import { screen, userEvent, within } from '@storybook/testing-library';
import { myButtonComponent } from '../mybutton/mybutton.component';
import { ButtonGroupComponent } from './button-group.component';
import { LoginboxComponent } from '../loginbox/loginbox.component';

export default {
  title: 'PUBLIC/buttonGroup',
  component: ButtonGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [myButtonComponent,LoginboxComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // componentSubtitle:"write by stories.ts",
    actions: {}
  },
} as Meta;

const Template: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
  props: args,
});

export const phone = Template.bind({});
phone.args = {
  label1: "but1",
  label2: "but2",
  size1: "large",
};

//canvasElement to scope your element queries to the current story
phone.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  await new Promise(f => setTimeout(f, 1000));
  userEvent.clear(await within(canvasElement).getByTestId('email'));
  await new Promise(f => setTimeout(f, 1000));
  await userEvent.type(canvas.getByTestId('email'), 'aaa@mail.com',{delay:100});
  await userEvent.click(canvas.getByTestId('button1'));
};

export const status2 = Template.bind({});
status2.args = {
  label1: "button1",
  label2: "button2",
  size1: "small"
};
status2.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  //delay 打字的速度
  await userEvent.type(canvas.getByTestId('email'), '... typing',{delay:100});
  await new Promise(f => setTimeout(f, 1000));
  await userEvent.dblClick(canvas.getByTestId('button1'));
}

export const status3 = Template.bind({});
status3.args = {
  ...status2.args,
  size2: "small"
}

