/**
 * @jest-environment node
 */
import FeedService from './feed.service';

describe('FEED SERVICE: ', () => {
  describe('function getAllFeeds', () => {
    let successResponse: string;
    let errorResponse: any;
    beforeAll((done) => {
      FeedService.getAllFeeds().then((res) => {
        successResponse = res.data;
      }).finally(() => done());
    });
    it('should return an object with a token', () => {
      expect(successResponse.length).toBeDefined();
    });
  });

});
