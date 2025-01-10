// components/Card/Card.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '@/components/legacy/Card/Card.vue';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    date: { control: 'date' },
    image: { control: 'text' },
    tags: { control: 'array' },
    link: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '카드 제목',
    description: '카드 설명 텍스트가 들어갑니다.',
    date: '2024-01-10',
    tags: ['Tag 1', 'Tag 2']
  }
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: 'https://via.placeholder.com/400x200'
  }
};

export const WithLink: Story = {
  args: {
    ...Default.args,
    link: '#'
  }
};