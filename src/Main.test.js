import React from 'react';
import Layout from './Main'
import Unselected from './components/UnSelected'
import {  mount } from 'enzyme';
import CalculatorBody from './components/CalculatorBody';
import Input from './components/Input';
import IsSelected from './components/IsSelected';

// describe('Mock up layout testing', () => {
//     let wrapper;
//     beforeEach(()=> {
//          wrapper = mount(<Layout/>)
//     })
//     test('should check that there are all necessary node element', () => {
//         expect(wrapper.find('div#main').exists()).toBeTruthy()
//         expect(wrapper.find('div#sidebar').exists()).toBeTruthy()
//         expect(wrapper.find('section#humanitize').exists()).toBeTruthy()
//         expect(wrapper.find('div#cal_body').exists()).toBeTruthy()
//         expect(wrapper.find('div#unselected').exists()).toBeTruthy()
//         expect(wrapper.find('div#iselected').exists()).toBeTruthy()
//         expect(wrapper.find('div#case_input').exists()).toBeTruthy()
//         expect(wrapper.find('div#error_message').exists()).toBeTruthy()
//         expect(wrapper.find('div#result').exists()).toBeTruthy()
//         expect(wrapper.find('p#result_output').exists()).toBeTruthy()
//         expect(wrapper.find('div#advise_links').exists()).toBeTruthy()
//     })
    
// })
describe('Component and State state testing', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody/>)
    })

    test('should select the default option', () => {
        expect(wrapper.find('select').props().value).toBe('Select Operation')
    })
    it('should select correct option on change',() =>{
        // wrapper.find('select').simulate('change', {target: {value: 'good'}})
        expect(wrapper.find('select').props().value).toBe('Select Operation')
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        expect(wrapper.find('div#unselected').exists()).toBeFalsy()
        })

    test('should unmount div#selec  ted when a option is default', () => {
        expect(wrapper.find('div#iselected').exists()).toBeFalsy()
    }) 
        
    test('should unmount div#unselected when a option is selected', () => {
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        expect(wrapper.find('div#unselected').exists()).toBeFalsy()
    }) 

    test('should mount div#selec  ted when a option is selected', () => {
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        expect(wrapper.find('div#iselected').exists()).toBeTruthy()
    }) 
    
})
describe('Specific form should be render base on the selected option', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody/>)
    })

    test('test that when *Profit & Loss is selected; form with id = "gain_form" is rendered to selected div ', () => {
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        expect(wrapper.find('form#gain_form').exists()).toEqual(true);
        

    })
    test('should check other form are selected the situable form is rendered', () => {
        wrapper.find('select').simulate('change', {target: {value: 'Retail Price'}})
        expect(wrapper.find('div#promise_form').exists()).toEqual(true);    
    })
    
})
describe('Check State value for input and result', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody/>)
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        wrapper.find('form#gain_form')
    })
    test('should check the default values for states, cost_price: 0,selling_price: 0, gain: 0 ', () => {
        expect(wrapper.find('#cost_price').text()).toBe('0')
        expect(wrapper.find('#selling_price').text()).toBe('0')
        expect(wrapper.find('#profit').text()).toBe('0')
    })
    test('should check that when cost_price: 1, selling_price: 1, gain: 0 ', () => {
        //simulate input changes
        expect(wrapper.find('#cost_price').text()).toBe('1')
        expect(wrapper.find('#selling_price').text()).toBe('1')
        expect(wrapper.find('#profit').text()).toBe('0')
    })
    test('should check that when cost_price: 2, selling_price: 3, gain: 1 ', () => {
        //simulate input changes
        expect(wrapper.find('#cost_price').text()).toBe('2')
        expect(wrapper.find('#selling_price').text()).toBe('3')
        expect(wrapper.find('#profit').text()).toBe('1')

    })
    test('should check that when cost_price: 3, selling_price: 2, gain: -1 ', () => {
        //simulate input changes
        expect(wrapper.find('#cost_price').text()).toBe('3')
        expect(wrapper.find('#selling_price').text()).toBe('2')
        expect(wrapper.find('#profit').text()).toBe('-1')
    })
    
})
describe('Render better user interaction for output result', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody/>)
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        wrapper.find('form#gain_form')
    })
    test('render "you made profit one naira" when selling_price: 2 cost_price: 1', () => {
        //simulate the input changes in form
        expect(wrapper.find('p#result_output').text()).toContain('you made profit one naira')
        
    })
    test('render "you donot make any profit" when selling_price: 2 cost_price: 1', () => {
        //simulate the input changes in form
        expect(wrapper.find('p#result_output').text()).toContain('"you donot make any profit')
    })
    test('render "your made a loss of one naira" when selling_price: 2 cost_price: 1', () => {
        //simulate the input changes in form
        expect(wrapper.find('p#result_output').text()).toContain('your made a loss of one naira')
    })
    
})
describe('Render advise links for gain outcome', () => {
    let wrapper;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody/>)
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        wrapper.find('form#gain_form')
    })
    test('render "www.whattodoafteragreatsales.com" when selling_price: 2 cost_price: 1', () => {
        //simulate the input changes in form
        expect(wrapper.find('div#advise_links').text()).toContain('"www.whattodoafteragreatsales.com')

    })  
    test('render "www.bootsales.com" when selling_price: 2 cost_price: 1', () => {
        //simulate the input changes in form
        expect(wrapper.find('div#advise_links').text()).toContain('www.bootsales.com')
    })
    test('render "www.gettingahead.com" when selling_price: 2 cost_price: 1', () => {
        //simulate the input changes in form
        expect(wrapper.find('div#advise_links').text()).toContain('www.gettingahead.com')
    })
})

