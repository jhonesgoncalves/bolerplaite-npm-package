import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import Exemplo from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Exemplo Library', () => {
  it('should create an instance of Exemplo', () => {
    let marvel = new Exemplo({});
    expect(marvel).to.be.an.instanceof(Exemplo);
  });
  
});
