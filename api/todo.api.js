const BaseApi = require('./axios.base.api');

class TodoApi extends BaseApi {
  constructor() {
    super('todo');
  }

  getTodoByTodoId = async (todoId) => {
    try {
      const result = await this.get(`/${todoId}`);
      return result;
    } catch (err) {
      throw new Error(err.message);
    }
  };
}
module.exports = TodoApi;
