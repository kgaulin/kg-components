import React, { ReactElement } from 'react'
import { animated } from '@react-spring/web'
import { useButtonPressAnimation } from '../../../hooks/animations/useButtonPressAnimation'
import { CircularProgress } from '../../progress/circularProgress/CircularProgress'

interface RectProps {
  color?: 'primary' | 'secondary' | 'tertiary'

  size?: 'small' | 'medium' | 'large'

  label: string

  disabled?: boolean

  loading?: boolean

  appendIcon?: ReactElement

  trailingIcon?: ReactElement

  onClick?: () => void
}

export const Rect = ({
  label,
  color = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  ...props
}: RectProps): ReactElement => {
  const buttonStyles = {
    colors: {
      primary: `bg-inverse-primary text-inverse-primary ${
        !loading ? 'active:shadow-inner-20' : ''
      }`,
      secondary: `bg-tertiary text-primary ${
        !loading ? 'active:shadow-inner-8' : ''
      }`,
      tertiary: `bg-overlay-art text-primary ${
        !loading ? 'active:bg-overlay-light ' : ''
      }`
    },
    size: {
      small: 'px-1 py-1 h-[48px] min-w-[256px]',
      medium: 'px-2 py-2 h-[56px] min-w-[256px]',
      large: 'px-2 py-2 h-[56px] min-w-[343px]'
    }
  }

  const [springs, startAnimation] = useButtonPressAnimation()

  const handleClick = (): void => {
    if (!disabled && !loading) {
      startAnimation()
      if (props?.onClick != null) {
        props.onClick()
      }
    }
  }

  return (
    <animated.button
      className={`${buttonStyles.colors[color]} ${buttonStyles.size[size]} ${
        props.trailingIcon != null ? 'pr-4' : ''
      } relative flex cursor-pointer  justify-center rounded-none border-0 disabled:cursor-not-allowed disabled:bg-overlay-art disabled:text-state-disabled`}
      style={{ ...springs }}
      onClick={handleClick}
      disabled={disabled}
    >
      {props.appendIcon != null && (
        <span className="pr-1">{props.appendIcon}</span>
      )}
      {!loading ? label : <CircularProgress size="small"></CircularProgress>}
      {props.trailingIcon != null && (
        <span className="absolute right-3">{props.trailingIcon}</span>
      )}
    </animated.button>
  )
}
