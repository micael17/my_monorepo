// src/stories/Tag.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import Tag from '@/components/legacy/Tag/Tag.vue';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    count: { control: 'number' },
    active: { control: 'boolean' },
    clickable: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'JavaScript',
    count: 5
  }
};

export const Active: Story = {
  args: {
    label: 'TypeScript',
    count: 3,
    active: true
  }
};

export const NonClickable: Story = {
  args: {
    label: 'Vue.js',
    count: 8,
    clickable: false
  }
};

export const WithoutCount: Story = {
  args: {
    label: 'React'
  }
};