import type { Meta, StoryObj } from '@storybook/vue3';
import Header from '../components/Header/Header.vue';

const meta = {
  title: 'Example/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
