import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'outline']},
    backgroundColor: { control: 'color' },
  },
  args: {
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    label: 'Outline',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true
  },
};
