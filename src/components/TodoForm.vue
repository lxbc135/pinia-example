<script setup lang="ts">
import { ref } from 'vue';

import { useTodosStore } from '../stores/useTodosStore';

const store = useTodosStore();

const inputText = ref('');

function handleSubmit(e: Event) {
  e.preventDefault();

  if (inputText.value.length > 0) {
    store.addTodo(inputText.value);
    inputText.value = '';
  }
}
</script>

<template>
  <form class="flex justify-center" @submit="handleSubmit">
    <input
      v-model="inputText"
      type="text"
      id="todo"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full max-w-lg my-10"
      placeholder="My task is..."
      required
    />
  </form>
</template>
