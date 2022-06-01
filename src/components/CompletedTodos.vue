<script setup lang="ts">
import { useTodosStore } from '../stores/useTodosStore';
import TodoItem from './TodoItem.vue';

import { Todo } from '../types/todo';

const store = useTodosStore();

function handleDelete(todo: Todo) {
  store.deleteTodo(todo);
}

function handleUncompleted(id: number) {
  store.markUnclompleted(id);
}
</script>

<template>
  <ul>
    <TodoItem
      v-for="todo in store.completedTodos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="handleDelete"
      @mark-uncompleted="handleUncompleted"
    />
  </ul>
</template>
