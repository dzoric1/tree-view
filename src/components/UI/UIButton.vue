<script setup lang="ts">
type buttonType = 'button' | 'submit' | 'reset';

type Props = {
  text: string;
  type?: buttonType;
  disabled?: boolean;
};

type Emits = {
  (e: 'click'): void;
};

const { text, type = 'button', disabled = false } = defineProps<Props>();
const emits = defineEmits<Emits>();
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button"
    @click="emits('click')"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.button {
  @apply text-base text-white bg-blue-500 px-4 h-8 rounded-lg flex items-center justify-center hover:opacity-75 transition-colors active:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-700 disabled:hover:opacity-100 disabled:cursor-not-allowed;
}
</style>
