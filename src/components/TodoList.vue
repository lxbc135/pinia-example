<script setup lang="ts">
import { useTodosStore } from '../stores/useTodosStore';
import TodoItem from './TodoItem.vue';

const store = useTodosStore();

function handleRemove(todo: any) {
  store.deleteTodo(todo);
}

function handleCompleted(id: number) {
  store.markCompleted(id);
}
</script>

<template>
  <ul v-if="store.uncompletedTodos.length > 0">
    <TodoItem
      v-for="todo in store.uncompletedTodos"
      :todo="todo"
      @delete-todo="handleRemove"
      @mark-completed="handleCompleted"
    />
  </ul>

  <p v-else class="text-gray-500">
    You don't have any active todos. Add your brilliant tasks in the input
    field.
  </p>
</template>
