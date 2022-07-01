import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    tag: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      }
    }
  }
} as Meta<HeadingProps>

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Heading'
}
