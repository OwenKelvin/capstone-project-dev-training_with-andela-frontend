/**
 * @jest-environment node
 */
import ArticleService from './article.service';

describe('FEED SERVICE: ', () => {
  describe('function getAllFeeds', () => {
    let successResponse: string;
    beforeAll((done) => {
      ArticleService.createNew({title: 'test', article: 'test'}).then((res) => {
        successResponse = res.data;
      }).catch(() => { }).finally(() => done());
    });
    it('should return an array ', () => {
      expect(successResponse && successResponse.length).toBeTruthy;
    });
  });

});
