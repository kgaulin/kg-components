import {DecoratorFn} from '@storybook/react'

import "../dist/index.css";

const withTheme: DecoratorFn = (StoryFn) => {
  return (
        <StoryFn />
  )
}

// export all decorators that should be globally applied in an array
export const decorators = [withTheme]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}


