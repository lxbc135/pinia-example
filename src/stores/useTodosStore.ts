import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { Todo } from '../types/todo';

export const useTodosStore = defineStore('todosStore', () => {
  // State
  const todos = ref<Todo[]>([]);
  const nextId = ref(0);
  const count = ref(0);

  // Getters
  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.isCompleted)
  );
  const uncompletedTodos = computed(() =>
    todos.value.filter((todo) => !todo.isCompleted)
  );

  // Actions
  function addTodo(todoText: string) {
    todos.value.push({
      id: nextId.value++,
      isCompleted: false,
      content: todoText,
    });
  }

  function deleteTodo(todo: Todo) {
    let index = todos.value.findIndex((item) => item.id === todo.id);

    if (index !== -1) {
      todos.value.splice(index, 1);
    } else {
      throw new Error('Failed to find the todo with id ' + todo.id);
    }
  }

  function markCompleted(id: number) {
    let index = todos.value.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      todos.value[index].isCompleted = true;
    } else {
      throw new Error('Failed to mark as complete the todo with id ' + id);
    }
  }

  function markUnclompleted(id: number) {
    let index = todos.value.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      todos.value[index].isCompleted = false;
    } else {
      throw new Error('Failed to mark as incomplete the todo with id ' + id);
    }
  }

  return {
    todos,
    count,
    completedTodos,
    uncompletedTodos,
    addTodo,
    deleteTodo,
    markCompleted,
    markUnclompleted,
  };
});
