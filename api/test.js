const TodoApi = require('./todo.api');

const todoApi = new TodoApi();

console.log(todoApi.getTodoByTodoId('5e836bf520182b13d0adca62'));
