import React from 'react';
import Layout from './Main'
import Unselected from './components/UnSelected'
import {  mount } from 'enzyme';
import CalculatorBody from './components/CalculatorBody';

describe('Mock up layout testing', () => {
    let wrapper;
    beforeEach(()=> {
         wrapper = mount(<Layout/>)
    })
    test('should check that there are all necessary node element', () => {
        expect(wrapper.find('div#main').exists()).toBeTruthy()
        expect(wrapper.find('div#sidebar').exists()).toBeTruthy()
        expect(wrapper.find('section#humanitize').exists()).toBeTruthy()
        expect(wrapper.find('div#cal_body').exists()).toBeTruthy()
        expect(wrapper.find('div#unselected').exists()).toBeTruthy()
        expect(wrapper.find('div#iselected').exists()).toBeTruthy()
        expect(wrapper.find('div#case_input').exists()).toBeTruthy()
        expect(wrapper.find('div#error_message').exists()).toBeTruthy()
        expect(wrapper.find('div#result').exists()).toBeTruthy()
        expect(wrapper.find('p#result_output').exists()).toBeTruthy()
        expect(wrapper.find('div#advise_links').exists()).toBeTruthy()
    })
    
})
describe('Component and State state testing', () => {
    test('should select the default option', () => {
        const wrapper = mount(<Unselected />);
        console.log(wrapper.debug())
        expect(wrapper.find('select').props().value).toBe('good')
    })
    it('should select correct time on change',() =>{
        const wrapper = mount(<CalculatorBody />)
        wrapper.find('select').simulate('change', {target: {value: 'bad'}})
        expect(wrapper.find('select').props().value).toBe('bad')
        })
        
    test('should unmount div#unselected and mount div#selec  ted when a option is selected', () => {
        const wrapper = mount(<CalculatorBody />)
        wrapper.find('select').simulate('change', {target: {value: 'bad'}})
        expect(wrapper.find('div#unselected').exists()).toBeFalsy()
    }) 
    
})
describe('Specific form should be render base on the selected option', () => {
    
    test('test that when *calculater_profit is selected; form with id = "gain form" is rendered to selected div ', () => {
    })
})
describe('Check State value for input and result', () => {
    test('should check the default values for states, cost_price: 0,selling_price: 0, gain: 0 ', () => {
        
    })
    test('should check that when cost_price: 1, selling_price: 1, gain: 0 ', () => {
        
    })
    test('should check that when cost_price: 2, selling_price: 3, gain: 1 ', () => {
        
    })
    test('should check that when cost_price: 3, selling_price: 2, gain: -1 ', () => {
        
    })
    
})
describe('Render better user interaction for output result', () => {
    test('render "you made profit one naira" when selling_price: 2 cost_price: 1', () => {
        
    })
    test('render "you donot make any profit" when selling_price: 2 cost_price: 1', () => {
        
    })
    test('render "your made a loss of one naira" when selling_price: 2 cost_price: 1', () => {
        
    })
    
})
describe('Render advise links for gain outcome', () => {
    test('render "www.whattodoafteragreatsales.com" when selling_price: 2 cost_price: 1', () => {
        
    })
    test('render "www.bootsales.com" when selling_price: 2 cost_price: 1', () => {
        
    })
    test('render "www.gettingahead.com" when selling_price: 2 cost_price: 1', () => {
        
    })
    
})

