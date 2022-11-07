import { useButtonPressAnimation } from '../../../hooks/animations/useButtonPressAnimation'
import { animated } from '@react-spring/web'
import React, { ReactElement } from 'react'

interface PillProps {
  size?: 'small' | 'medium' | 'large'

  label: string

  disabled: boolean

  appendIcon?: ReactElement

  trailingIcon?: ReactElement

  onClick?: () => void
}

export const Pill = ({
  label,
  size = 'medium',
  disabled = false,
  ...props
}: PillProps): ReactElement => {
  const buttonStyles = {
    size: {
      small: 'px-1 py-1 h-[48px] min-w-[256px]',
      medium: 'px-2 py-2 h-[56px] min-w-[256px]',
      large: 'px-2 py-2 h-[56px] min-w-[343px]'
    }
  }

  const [springs, startAnimation] = useButtonPressAnimation()

  const handleClick = (): void => {
    if (!disabled) {
      startAnimation()
      if (props?.onClick != null) {
        props.onClick()
      }
    }
  }

  return (
    <animated.button
      className={`${buttonStyles.size[size]}  relative flex cursor-pointer  justify-center rounded-none border-0 disabled:cursor-not-allowed disabled:bg-overlay-art disabled:text-state-disabled`}
      style={{ ...springs }}
      onClick={handleClick}
      disabled={disabled}
    >
      {!(props.appendIcon == null) != null && (
        <span className="pr-1">{props.appendIcon}</span>
      )}
      {Boolean(label) && <span className="text-primary">{label}</span>}
      {!(props.trailingIcon == null) != null && (
        <span className="pl-1">{props.trailingIcon}</span>
      )}
    </animated.button>
  )
}
