import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../../src/client/components/App';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render a div component', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
});
