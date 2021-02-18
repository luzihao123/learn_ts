import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Alert ,{AlertProps} from './alert'

const defaultProps = {
    message: 'dddd',
    description: '描述',
    onClose: jest.fn(),
    show: true
}

describe('case1', ()=>{
    it('should render the correct default alert', ()=>{
        const wrapper = render(<Alert {...defaultProps} />)
        const element = wrapper.getByText('dddd') as HTMLElement
        const closed = wrapper.getByText('关闭') as HTMLElement
        expect(element).toBeInTheDocument()
        fireEvent.click(closed)
        expect(element).not.toBeInTheDocument()
        
    
    })
})