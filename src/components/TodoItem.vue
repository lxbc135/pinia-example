<script setup lang="ts">
import { Todo } from '../types/todo';

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'deleteTodo', todo: Todo): void;
  (e: 'markCompleted', id: number): void;
  (e: 'markUncompleted', id: number): void;
}>();

function handleCompletion() {
  if (props.todo.isCompleted) {
    emit('markUncompleted', props.todo.id);
  } else {
    emit('markCompleted', props.todo.id);
  }
}

function handleDelete() {
  emit('deleteTodo', props.todo);
}
</script>

<template>
  <li
    class="flex items-center justify-between p-2 border-2 border-solid border-gray-300 rounded-lg my-1"
  >
    <span
      class="text-gray-900 text-lg break-all"
      :class="{ 'line-through text-gray-500': props.todo.isCompleted }"
    >
      {{ props.todo.content }}
    </span>

    <div class="ml-2 flex gap-1">
      <button
        @click="handleCompletion"
        class="p-2 border-solid border-2 border-gray-400 rounded-lg text-gray-500"
        :class="{
          'hover:text-green-500 hover:border-green-500':
            !props.todo.isCompleted,
          'hover:text-yellow-500 hover:border-yellow-500':
            props.todo.isCompleted,
        }"
      >
        <svg
          v-if="!props.todo.isCompleted"
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
            d="M5 13l4 4L19 7"
          />
        </svg>
        <svg
          v-else
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button
        @click="handleDelete"
        class="p-2 border-solid border-2 border-gray-400 rounded-lg text-gray-500 hover:text-red-500 hover:border-red-500"
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
  </li>
</template>
