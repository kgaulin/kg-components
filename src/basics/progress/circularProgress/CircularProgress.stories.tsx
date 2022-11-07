import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CircularProgress } from './CircularProgress'

const story: ComponentMeta<typeof CircularProgress> = {
  title: 'Basics/Progress/CircularProgress',
  component: CircularProgress,
  argTypes: {}
}

const Template: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args}></CircularProgress>
)

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const XLarge = Template.bind({})
XLarge.args = {
  size: 'xLarge'
}

export default story
