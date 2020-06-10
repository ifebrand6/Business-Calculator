import React from 'react';
import Layout from './Main'
import {  mount } from 'enzyme';

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