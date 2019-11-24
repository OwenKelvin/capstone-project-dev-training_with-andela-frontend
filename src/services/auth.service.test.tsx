/**
 * @jest-environment node
 */
import AuthService from './auth.service';

describe('AUTH SERVICE: ', () => {
  // TODO user: mock http 
  describe('function authenticate', () => {
    let successResponse: string;
    let errorResponse: any = {};
    beforeAll((done) => {
      const validCredentials = { email: 'admin@admin.com', password: 'password' };
      AuthService.authenticate(validCredentials).then((res) => {
        successResponse = res.data.token;
      }).catch(() => {
        console.log('Error occured');
      }).finally(() => done());
    });
    beforeAll((done) => {
      AuthService.authenticate({ email: 'admin@admin.com', password: 'invalidPassword' }).then((err) => {
        errorResponse = err;
      }).catch(() => { }).finally(() => done());
    });
    it('should return an object with a token', () => {
      expect(successResponse).toBeDefined();
    });
    it('should return error if credentials are invalid', () => {
      expect(errorResponse.status).toBe('fail');
    });
  });
  describe('fuction authenticatedUser', () => {
    let isPromise = false;
    beforeAll((done) => {
      AuthService.loggedInUser().catch(() => {
        isPromise = true;
      }).finally(() => done());
    })
    it('should return a promise', () => {
      expect(isPromise).toBeTruthy();
    });
  });
});
