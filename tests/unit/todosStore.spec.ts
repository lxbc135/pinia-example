import { setActivePinia, createPinia } from 'pinia';
import {useTodosStore} from '../../src/stores/useTodosStore';

describe('todos store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });

  it('should add todo', () => {
    const todos = useTodosStore();
    expect(todos.todos).toEqual([])
    todos.addTodo('todo1');
    expect(todos.todos).toEqual([{
      id: 0,
      isCompleted: false,
      content: 'todo1'
    }]);
  });
});
