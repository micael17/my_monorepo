// src/stories/Pagination.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import Pagination from '@/components/legacy/Pagination/Pagination.vue';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    maxVisible: { control: 'number' },
    showEdges: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    maxVisible: 5,
    showEdges: true
  }
};

export const WithoutEdges: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    maxVisible: 5,
    showEdges: false
  }
};

export const ManyPages: Story = {
  args: {
    currentPage: 50,
    totalPages: 100,
    maxVisible: 5,
    showEdges: true
  }
};