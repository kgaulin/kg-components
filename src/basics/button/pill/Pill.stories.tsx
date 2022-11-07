import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pill } from './Pill'

const story: ComponentMeta<typeof Pill> = {
  title: 'Basics/Button/Pill',
  component: Pill,
  argTypes: {}
}

const Template: ComponentStory<typeof Pill> = (args) => (
  <Pill {...args}>Button</Pill>
)

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
  label: 'Button',
  disabled: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'medium',
  label: 'Button',
  disabled: false
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  size: 'medium',
  label: 'Button',
  disabled: false
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
  disabled: false
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  label: 'Button',
  disabled: false
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
  disabled: false
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'medium',
  label: 'Button',
  disabled: true
}

export const Loading = Template.bind({})
Loading.args = {
  size: 'medium',
  label: 'Button',
  disabled: false
}

export const AppendIcon = Template.bind({})
AppendIcon.args = {
  size: 'medium',
  label: 'Button',
  disabled: false,
  appendIcon: <span>+</span>
}

export const TrailingIcon = Template.bind({})
TrailingIcon.args = {
  size: 'medium',
  label: 'Button',
  disabled: false,
  trailingIcon: <span>-</span>
}

export const TrailingAndAppendIcon = Template.bind({})
TrailingAndAppendIcon.args = {
  size: 'medium',
  label: 'Buttonnnnnnnnnnnnnnnnnnnn',
  disabled: false,
  trailingIcon: <span>+</span>,
  appendIcon: <span>+</span>
}

export default story
