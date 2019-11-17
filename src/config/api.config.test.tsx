import { apiLink } from './api.config';

describe('LOGIN_ACTION: ', () => {
    it('should have a config Link', () => {
        expect(apiLink).toBeDefined();
    });
});
