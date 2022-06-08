<script setup lang="ts">
import { useTodosStore } from './stores/useTodosStore';

import CompletedTodos from './components/CompletedTodos.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

const store = useTodosStore();

function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}
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

    <button
      @click="clearLocalStorage"
      type="button"
      title="Clear locally stored todos"
      class="transition-colors ease-out duration-300 absolute right-5 bottom-5 p-3 border-2 border-solid border-gray-500 text-gray-500 rounded-lg hover:bg-gray-700 hover:border-gray-700 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  </div>
</template>
