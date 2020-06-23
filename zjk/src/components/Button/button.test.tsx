import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Button ,{ButtonProps,ButtonSize, ButtonType} from './button'


const defaultProps = {
  onClick: jest.fn()
}
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test button component', ()=>{
  it('should render the correct default button', ()=>{
    const wrapper = render(<Button {...defaultProps}>nice</Button>)
    const element = wrapper.getByText('nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()

  })
  it('should render the correct based on different props', ()=>{
    const wrapper = render(<Button {...testProps}>nice</Button>)
    const element = wrapper.getByText('nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link btnType equals link and href is provided', ()=>{
    const wrapper = render(<Button btnType={ButtonType.Link} href='http://'>Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', ()=>{
    const wrapper = render(<Button {...disabledProps}>nice</Button>)
    const element = wrapper.getByText('nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})