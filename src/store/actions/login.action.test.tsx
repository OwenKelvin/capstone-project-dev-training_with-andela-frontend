import loginAction from './login.action';

describe('LOGIN_ACTION: ', () => {
    it('should have login action function', () => {
        expect(loginAction).toBeInstanceOf(Function);
        loginAction(({ type }: { type: string }) => {
            expect(type).toBeDefined();
        })
    });
})