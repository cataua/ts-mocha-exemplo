import GreetingParams from '../types/greetings';

export default (_greetingParams: GreetingParams): GreetingParams['name'] => `Olá, ${_greetingParams['name']}!`;

