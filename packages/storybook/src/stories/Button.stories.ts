// packages/storybook/src/stories/Button.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/ui/button/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="primary">Primary 버튼</Button>'
  })
}

export const Secondary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="secondary">Secondary 버튼</Button>'
  })
}

export const Outline: Story = {
  render: () => ({
    components: { Button },
    template: '<Button variant="outline">Outline 버튼</Button>'
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: '<Button disabled>비활성화 버튼</Button>'
  })
}