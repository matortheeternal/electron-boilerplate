import { greet, bye } from './hello_world';
import env from '../env';

describe('hello world', () => {
  it('greets', () => {
    expect(greet()).toBe('Hello World!');
  });

  it('says goodbye', () => {
    expect(bye()).toBe('See ya!');
  });

  it('should load test environment variables', () => {
    expect(env.name).toBe('test');
    expect(env.description).toBe('Add here any environment specific stuff you like.');
  });
});
