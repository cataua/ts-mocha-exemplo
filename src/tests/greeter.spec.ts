import 'mocha';
import { expect } from 'chai';
import greeter from '../components/greeter';

describe('Should return a greeting', () => {
  it('Return: Olá, mundo!', () => {
    
    const greet = greeter({
      name: 'Mundo',
    });
    expect(greet).to.equal('Olá, Mundo!');
  })
})