import { SpringValue, useSpring } from '@react-spring/web'

export const useButtonPressAnimation = (): [
  { transform: SpringValue<string> },
  () => void
] => {
  const [springs, api] = useSpring(() => ({
    transform: 'scale(1)'
  }))

  const startAnimation = (): void => {
    api.start({
      from: {
        transform: 'scale(1)'
      },
      to: {
        transform: 'scale(0.9)'
      },
      reverse: true
    })
  }

  return [springs, startAnimation]
}
