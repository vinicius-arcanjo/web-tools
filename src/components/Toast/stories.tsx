import { Story, Meta } from '@storybook/react'
import Toast, { ToastProps } from '.'

export default {
  title: 'Toast',
  argTypes: {
    message: {
      control: {
        type: 'text'
      }
    }
  },
  component: Toast
} as Meta

export const Default: Story<ToastProps> = (args) => <Toast {...args} />

Default.args = {
  message: 'Copied to clipboard!'
}
