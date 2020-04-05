import BaseApi from './fetch.base.api';

class TestApi extends BaseApi {
  constructor() {
    super('posts');
  }

  postTest = async () => {
    try {
      const result = await this.post('', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });

      return result;
    } catch (err) {
      return err.message;
    }
  };
}
export default TestApi;
