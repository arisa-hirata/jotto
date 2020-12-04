import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtil';
import Congrats from './Congrats';

/**
* Factory function to create a ReactWrapper for the Congrats component.
* @function setup
* @param {object} testValues - contextValues specific to this setup.
* @returns {ReactWrapper}
*/


const defaultProps = { success: false };

const setup = (props = {}) => {
  // props = { success: true }
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />)
};

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    // const wrapper = setup({ succeess: false });
    // const component = findByTestAttr(wrapper, 'component-congrats');
    // expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `suceess`', () => {
    // const wrapper = setup({ succeess: true });
    // const message = findByTestAttr(wrapper, 'congrats-message');
    // expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    // const expectedProps = { succeess: false };
    // checkProps(Congrats, expectedProps);
});
