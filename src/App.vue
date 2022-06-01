<script setup lang="ts">
import { useTodosStore } from './stores/useTodosStore';

import CompletedTodos from './components/CompletedTodos.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

const store = useTodosStore();
</script>

<template>
  <div class="p-5">
    <h1 class="text-5xl text-center">Pinia Todo Example</h1>

    <TodoForm />

    <div class="my-10 max-w-lg mx-auto">
      <h2 class="text-2xl text-gray-900 font-bold mb-2">Active Todos</h2>
      <TodoList />
    </div>

    <div v-if="store.completedTodos.length > 0" class="my-10 max-w-lg mx-auto">
      <h2 class="text-2xl text-gray-900 font-bold mb-2">
        Completed Todos ({{ store.completedTodos.length }})
      </h2>
      <CompletedTodos />
    </div>
  </div>
</template>
