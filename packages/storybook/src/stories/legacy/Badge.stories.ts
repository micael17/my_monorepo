import type { Meta, StoryObj } from '@storybook/vue3';
import Badge from '@/components/legacy/Badge/Badge.vue';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['primary', 'success', 'warning', 'error'] },
    color: { control: 'color' }
  },
  args: {
    label: 'Default Badge',  // 기본값 설정
    type: 'primary',         // 기본 타입 설정
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Badge',
    type: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Badge',
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Badge',
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Badge',
    type: 'error',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Color Badge',
    type: 'primary',
    color: ''
  },
};
