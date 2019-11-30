/**
 * @jest-environment node
 */
import GifService from './gif.service';

describe('GIF SERVICE: ', () => {
  describe('function getAllFeeds', () => {
    let successResponse: string;
    beforeAll((done) => {
      GifService.createNew({title: 'test'}).then((res) => {
        successResponse = res.data;
      }).catch(() => { }).finally(() => done());
    });
    it('should return an array ', () => {
      expect(successResponse && successResponse.length).toBeTruthy;
    });
  });

});
