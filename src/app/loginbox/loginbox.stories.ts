import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { action } from '@storybook/addon-actions'
import { LoginboxComponent } from "./loginbox.component";

export default{
  component: LoginboxComponent,
  decorator: [
    moduleMetadata({
      declarations: [LoginboxComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Public/loginBox',
  parameters:{
    componentSubtitle:"phone or email",
  },
  excludeStories: /.*Data$/,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // size: {
    //     control: {
    //       type: 'inline-radio',
    //       options: ['small', 'medium', 'large'],
    //     },
    //     defaultValue:'medium',
    // },
  }
} as Meta;

const Template: Story<LoginboxComponent> = (args: LoginboxComponent) => ({
  // component: myButtonComponent,
  props: {
    ...args,
  }
});

//Addon-jest
export const AppComponentWithJestTests = () => ({
  props: {},
});

AppComponentWithJestTests.storyName = 'loginbox with jest tests';

AppComponentWithJestTests.parameters = {
  jest: 'loginbox.component.spec.ts',
};

export const Default = Template.bind({});
Default.args = {
  type: 'email',
};

export const Email = Template.bind({});
Email.parameters = {
  docs: {
    description: {
      story: 'Email'
    }
  },
};
Email.args = {
  ...Default.args,
};
