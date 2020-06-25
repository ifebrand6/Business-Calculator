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
//         expect(wrapper.find('p#advise_links').exists()).toBeTruthy()
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
        expect(wrapper.find('div#gain_form').exists()).toEqual(true);
        

    })
    test('should check other form are selected the situable form is rendered', () => {
        wrapper.find('select').simulate('change', {target: {value: 'Retail Price'}})
        expect(wrapper.find('div#retail_price_form').exists()).toEqual(true);    
    })
    
})
describe('Check State value for input and result', () => {
    let wrapper;
    let sellingPriceInput;
    let costPriceInput;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody />)
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        wrapper.find('div#gain_form')
        sellingPriceInput = wrapper.find('input#selling_price');
        costPriceInput = wrapper.find('input#cost_price')
    })
    test('should check the default values for states, cost_price: 0,selling_price: 0, gain: 0 ', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 0}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 0}})
        expect(wrapper.find('#cost_price').prop('value')).toBe(0)
        expect(wrapper.find('#selling_price').prop('value')).toBe(0)
        expect(wrapper.find('p#result_output').text()).toBe('0')
    })
    test('should check that when cost_price: 1, selling_price: 1, gain: 0 ', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 1}});
        expect(wrapper.find('#cost_price').prop('value')).toBe(1)
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 1}})
        expect(wrapper.find('#selling_price').prop('value')).toBe(1)
        expect(wrapper.find('p#result_output').text()).toBe('0')
    })
    test('should check that when cost_price: 2, selling_price: 3, gain: 1 ', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 2}});
        expect(wrapper.find('#cost_price').prop('value')).toBe(2)
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 3}})
        expect(wrapper.find('#selling_price').prop('value')).toBe(3)
        expect(wrapper.find('p#result_output').text()).toBe('1')

    })
    test('should check that when cost_price: 3, selling_price: 2, gain: -1 ', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 3}});
        expect(wrapper.find('#cost_price').prop('value')).toBe(3)
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 2}})
        expect(wrapper.find('#selling_price').prop('value')).toBe(2)
        expect(wrapper.find('p#result_output').text()).toBe('-1')
    })
    
})
describe('Render better user interaction for output result', () => {
    let wrapper;
    let sellingPriceInput;
    let costPriceInput;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody />)
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        wrapper.find('div#gain_form')
        sellingPriceInput = wrapper.find('input#selling_price');
        costPriceInput = wrapper.find('input#cost_price')
    })
    test('render "you made profit one naira" when selling_price: 2 cost_price: 1', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 1}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 2}})
        expect(wrapper.find('h6#betterOutput').text()).toContain('you made profit one naira')
        
    })
    test('render "you donot make any profit" when selling_price: 1 cost_price: 1', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 1}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 1}})
        expect(wrapper.find('h6#betterOutput').text()).toContain('you donot make any profit')
    })
    test('render "your made a loss of one naira" when selling_price: 1 cost_price: 2', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 2}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 1}})
        expect(wrapper.find('h6#betterOutput').text()).toContain('your made a loss of one naira')
    })
    
})
describe('Render advise links for gain outcome', () => {
    let wrapper;
    let sellingPriceInput;
    let costPriceInput;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody />)
        wrapper.find('select').simulate('change', {target: {value: 'Profit & Loss Calculator'}})
        wrapper.find('div#gain_form')
        sellingPriceInput = wrapper.find('input#selling_price');
        costPriceInput = wrapper.find('input#cost_price')
    })
    test('render "www.whattodoafteragreatsales.com" when selling_price: 2 cost_price: 1', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 1}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 2}})
        expect(wrapper.find('p#advise_links').text()).toContain('www.whattodoafteragreatsales.com')

    })  
    test('render "www.bootsales.com" when selling_price: 1 cost_price: 2', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 2}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 1}})
        expect(wrapper.find('p#advise_links').text()).toContain('www.bootsales.com')
    })
    test('render "www.gettingahead.com" when selling_price: 1 cost_price: 1', () => {
        costPriceInput.simulate('change', {target: {name: 'cost_price',value: 1}});
        sellingPriceInput.simulate('change',{target: {name: 'selling_price',value: 1}})
        expect(wrapper.find('p#advise_links').text()).toContain('www.gettingahead.com')
    })
})
describe('Retail Price Unit Test', () => {
    let wrapper;
    let over_head_cost;
    let admin_expenses;
    let production_cost;
    let num_of_unit_product;
    let profit_margin;
    beforeEach(()=> {
        wrapper = mount(<CalculatorBody />)
        wrapper.find('select').simulate('change', {target: {value: 'Retail Price'}})
        wrapper.find('div#retail_price_form')
        over_head_cost = wrapper.find('input#over_head_cost');
        admin_expenses = wrapper.find('input#admin_expenses');
        production_cost = wrapper.find('input#production_cost')
        num_of_unit_product = wrapper.find('input#num_of_unit_product')
        profit_margin = wrapper.find('input#profit_margin')
    })
    test('should check that when retail calculator is selected it renders retail calculator', () => {
        expect(wrapper.find('div#retail_price_form').exists()).toEqual(true);    
    })
    test('should when  over_head_cost is 1,admin_expenses is 1, production_cost is 1,num_of_unit_product is 1, profit_margin is 1, RESULT OUTPUT = 8', () => {
        wrapper.find('input#over_head_cost').simulate('change', {target: {name: 'over_head_cost',value: 1}});
        wrapper.find('input#admin_expenses').simulate('change', {target: {name: 'admin_expenses',value: 1}});
        wrapper.find('input#production_cost').simulate('change', {target: {name: 'production_cost',value: 1}});
        wrapper.find('input#num_of_unit_product').simulate('change', {target: {name: 'num_of_unit_product',value: 1}});
        wrapper.find('input#profit_margin').simulate('change', {target: {name: 'profit_margin',value: 1}});
        console.log(wrapper.debug())
        expect(wrapper.find('p#result_output').text()).toBe('8')

    })
    test('should when  over_head_cost is 1,admin_expenses is 3, production_cost is 2,num_of_unit_product is 100, profit_margin is 10, RESULT OUTPUT = 24 ', () => {
        over_head_cost.simulate('change', {target: {name: 'over_head_cost',value: 1}});
        admin_expenses.simulate('change', {target: {name: 'admin_expenses',value: 3}});
        production_cost.simulate('change', {target: {name: 'production_cost',value: 2}});
        num_of_unit_product.simulate('change', {target: {name: 'num_of_unit_product',value: 100}});
        profit_margin.simulate('change', {target: {name: 'profit_margin',value: 10}});
        expect(wrapper.find('p#result_output').text()).toBe(24)

    })
    
    
    
})
