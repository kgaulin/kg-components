import { render } from 'test-utils'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Rect } from './Rect'
import React from 'react'

test('click on button', async () => {
  const stub = jest.fn()

  const { getByText } = render(<Rect label="button" onClick={stub} />)

  await userEvent.click(getByText('button'))

  expect(stub).toBeCalled()
})

test('click on disabled button', async () => {
  const stub = jest.fn()

  const { getByText } = render(
    <Rect label="button" disabled={true} onClick={stub} />
  )

  await userEvent.click(getByText('button'))

  expect(stub).toBeCalledTimes(0)
  expect(getByText('button')).toBeDisabled()
})

test('loading button', async () => {
  const { getByTestId } = render(<Rect label="button" loading={true} />)

  getByTestId('circle-progress')
})
