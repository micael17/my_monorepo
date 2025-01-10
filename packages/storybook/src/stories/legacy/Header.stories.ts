// Header.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import Header from '@/components/legacy/Header/Header.vue';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    navItems: { control: 'object' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'My Website',
    navItems: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
      {
        label: 'More',
        href: '#',
        dropdownItems: [
          { label: 'Option 1', href: '#' },
          { label: 'Option 2', href: '#' },
          { label: 'Option 3', href: '#' }
        ]
      }
    ]
  }
};