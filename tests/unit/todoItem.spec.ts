import { createPinia, setActivePinia } from 'pinia'
import { createApp } from 'vue';
import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue';

describe('TodoItem', () => {
  const app = createApp({});
  const pinia = createPinia();

  beforeEach(() => {
    app.use(pinia);
    setActivePinia(pinia);
  });

  it('should init todo item from props', () => {
    const wrapper = mount(TodoItem, {
      props: {
        todo: {id: 0, content: 'todo1', isCompleted: false}
      }
    });
    expect(wrapper.get('li').text()).toContain('todo1');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
