import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Rect } from './Rect'

const story: ComponentMeta<typeof Rect> = {
  title: 'Basics/Button/Rect',
  component: Rect,
  argTypes: {}
}

const Template: ComponentStory<typeof Rect> = (args) => (
  <Rect {...args}>Button</Rect>
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: false
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: false
}

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  size: 'small',
  label: 'Button',
  disabled: false,
  loading: false
}

export const Medium = Template.bind({})
Medium.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: false
}

export const Large = Template.bind({})
Large.args = {
  color: 'primary',
  size: 'large',
  label: 'Button',
  disabled: false,
  loading: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: true,
  loading: false
}

export const Loading = Template.bind({})
Loading.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: true
}

export const AppendIcon = Template.bind({})
AppendIcon.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: false,
  appendIcon: <span>+</span>
}

export const TrailingIcon = Template.bind({})
TrailingIcon.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
  disabled: false,
  loading: false,
  trailingIcon: <span>-</span>
}

export const TrailingAndAppendIcon = Template.bind({})
TrailingAndAppendIcon.args = {
  color: 'primary',
  size: 'medium',
  label: 'Buttonnnnnnnnnnnnnnnnnnnn',
  disabled: false,
  loading: false,
  trailingIcon: <span>+</span>,
  appendIcon: <span>+</span>
}

export default story
