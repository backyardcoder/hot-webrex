import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';

describe('Markup Component', () => {
  let wrapper, Markup;
  beforeEach(() => {
    process.env.NODE_ENV = 'development';
    Markup = proxyquire('../../src/server/Markup', {
      '../../webpack': require('../../webpack')
    }).default;
    wrapper = shallow(<Markup />);
  });

  it('should render the charset meta tag', () => {
    expect(wrapper.contains(<meta charSet="UTF-8" />)).to.be.true;
  });

  it('should render the UX-A-Comptabile tag for ie', () => {
    expect(
      wrapper.contains(<meta httpEquiv="X-UA-Compatible" content="ie=edge" />)
    ).to.be.true;
  });

  it('should render the viewport meta tag', () => {
    expect(
      wrapper.contains(
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      )
    ).to.be.true;
  });

  it('should render the mounting div container with correct id', () => {
    const mountContainer = wrapper.find('#app');
    expect(mountContainer).to.have.length(1);
  });

  describe('development environment', () => {
    beforeEach(() => {
      Markup = proxyquire('../../src/server/Markup', {
        '../../webpack': proxyquire('../../webpack', {})
      }).default;
      wrapper = shallow(<Markup />);
    });
    it('should not render a stylesheet tag', () => {
      expect(
        wrapper.contains(
          <link rel="stylesheet" href="/assets/client.min.css" />
        )
      ).to.be.false;
    });

    it('should serve the js files from webpack dev server', () => {
      expect(
        wrapper.contains(
          <script src="http://localhost:8080/assets/client.bundle.js" />
        )
      ).to.be.true;
    });
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
      Markup = proxyquire('../../src/server/Markup', {
        '../../webpack': proxyquire('../../webpack', {})
      }).default;
      wrapper = shallow(<Markup />);
    });

    it('should render a stylesheet tag for extracted css', () => {
      expect(
        wrapper.contains(
          <link rel="stylesheet" href="/assets/client.min.css" />
        )
      ).to.be.true;
    });

    it('should serve the js files via extracted bundle', () => {
      expect(
        wrapper.contains(
          <script src="http://localhost:8080/assets/client.bundle.js" />
        )
      ).to.be.false;

      expect(wrapper.contains(<script src="/assets/client.bundle.js" />)).to.be
        .true;
    });
  });
});
