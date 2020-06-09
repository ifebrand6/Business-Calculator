import React from 'react'
import Test from './Requirement'
import {  mount } from 'enzyme';


describe('Element Testing', () => {

    let wrapper;
    beforeEach(()=>{
         wrapper  = mount(<Test/>)
    })
    test('should confirm text in element', () => {        
        expect(wrapper.find('p').text()).toContain('first testing')
    });
    test('should render value in button element', () => {
        expect(wrapper.find('#increment-btn').text()).toBe('increment')
    });
    test('should test the state for initial value', () => {
        expect(wrapper.find('#counter-value').text()).toBe('0')
    }) 
    test('should increment the value of counter to be 1', () => {
        wrapper.find('#increment-counter').simulate('click')
        expect(wrapper.find('#counter-value').text()).toBe('1')
    })
    test('should decrement the value of counter to be 0', () => {
         wrapper.find('#increment-counter').simulate('click')
         expect(wrapper.find('#counter-value').text()).toBe('1')
         wrapper.find('#decrement-counter').simulate('click')
         expect(wrapper.find('#counter-value').text()).toBe('0')

    });
    test('should disable decrement if counter is less than 0', () => {
        wrapper.find('#decrement-counter').simulate('click')
        expect(wrapper.find('#counter-value').text()).toBe('0')
        wrapper.find('#decrement-counter').simulate('click')
        expect(wrapper.find('#counter-value').text()).toBe('0')
    })
    
});
