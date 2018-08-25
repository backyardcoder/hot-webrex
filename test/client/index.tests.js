import React from 'react';
import { stub } from 'sinon';
import { expect } from 'chai';
import proxquire from 'proxyquire';
import App from '../../src/client/components/App';

describe('client bootstrap', () => {
  let ReactDom, orignalGetElementById, stubGetElementById;
  beforeEach(() => {
    ReactDom = {
      render: stub()
    };
    stubGetElementById = stub();
    orignalGetElementById = document.getElementById;
    document.getElementById = stubGetElementById;

    proxquire('../../src/client/index.js', {
      'react-dom': ReactDom
    });
  });

  afterEach(() => {
    document.getElementById = orignalGetElementById;
  });

  it('should mount the App on the correct mounting element', () => {
    expect(ReactDom.render).to.have.been.calledWith(<App />);
    expect(stubGetElementById).to.have.been.calledWith('app');
  });
});
