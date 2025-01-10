// src/stories/Input.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import Input from '@/components/legacy/Input/Input.vue';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'search']
    },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    icon: {
      control: 'select',
      options: ['search', 'clear', undefined]
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '입력해주세요'
  }
};

export const Search: Story = {
  args: {
    value: '',
    placeholder: '검색어를 입력하세요',
    type: 'search',
    icon: 'search'
  }
};

export const WithError: Story = {
  args: {
    value: 'Invalid input',
    error: '올바른 값을 입력해주세요'
  }
};

export const Disabled: Story = {
  args: {
    value: 'Disabled input',
    disabled: true
  }
};