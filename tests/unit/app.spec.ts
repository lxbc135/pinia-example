// Example using real Pinia store
import { createPinia, setActivePinia, Pinia } from 'pinia'
import { createApp } from 'vue';
import { mount } from '@vue/test-utils'
import { useTodosStore } from '../../src/stores/useTodosStore';
import App from '../../src/App.vue';

describe('App', () => {
  let pinia: Pinia;

  beforeEach(() => {
    const app = createApp({});
    pinia = createPinia();
    app.use(pinia);
    setActivePinia(pinia);
  });

  it('should init todos from store', () => {
    const store = useTodosStore();
    store.addTodo('todo1');
    expect(store.todos.length).toBe(1);
    const wrapper = mount(App, {
      global: {
        plugins: [pinia], // use real pinia store
      },
    });
    const activeTodos = wrapper.findAll('li');
    expect(activeTodos.length).toBe(1);
    expect(activeTodos.at(0)?.text()).toContain('todo1');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should add todo', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [pinia],
      },
    });
    const input = wrapper.find('#todo');
    await input.setValue('todo1');
    await wrapper.find('form').trigger('submit');
    await wrapper.vm.$nextTick(); // required to see effect
    const todos = wrapper.findAll('li');
    expect(todos.length).toBe(1);
    expect(todos[0].text()).toContain('todo1');
  });
});
