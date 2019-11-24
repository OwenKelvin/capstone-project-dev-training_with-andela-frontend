/* eslint-disable no-undef */
import { apiLink } from './api.config';

describe('LOGIN_ACTION: ', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    process.env = { ...OLD_ENV };
    // delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });
  it('should have a config Link', () => {
    process.env.NODE_ENV = 'test';
    expect(apiLink).toBeDefined();
  });
  it('should have a config Link defined in production', () => {
    process.env.NODE_ENV = 'production';
    expect(apiLink).toBeDefined();
  });
});
