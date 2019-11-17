import loginReducer from './login.reducer';
import { LOGIN_SUCCESS_ACTION } from '../actions/login.action';

describe('LOGIN_ACTION: ', () => {
    it('should have login action function', () => {
        expect(loginReducer).toBeInstanceOf(Function);
        expect(loginReducer({}, LOGIN_SUCCESS_ACTION)).toBeDefined();
    });
});
