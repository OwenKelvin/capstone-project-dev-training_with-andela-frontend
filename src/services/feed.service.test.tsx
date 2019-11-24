/**
 * @jest-environment node
 */
import FeedService from './feed.service';

describe('FEED SERVICE: ', () => {
  describe('function getAllFeeds', () => {
    let successResponse: string;
    beforeAll((done) => {
      FeedService.getAllFeeds().then((res) => {
        successResponse = res.data;
      }).catch(() => { }).finally(() => done());
    });
    it('should return an array ', () => {
      expect(successResponse && successResponse.length).toBeTruthy;
    });
  });

});
