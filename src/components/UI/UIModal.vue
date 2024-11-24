<script setup lang="ts">
import XMarkIcon from '@/components/icons/XmarkIcon.vue';

type Props = {
  title: string;
};

type Emits = {
  (event: 'close'): void;
};

defineEmits<Emits>();
defineProps<Props>();
</script>

<template>
  <div class="modal" @click.self="$emit('close')">
    <div class="modal__body">
      <h2 class="modal__title">{{ title }}</h2>
      <slot></slot>
      <button class="modal__close-icon" @click="$emit('close')">
        <XMarkIcon />
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  @apply fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center z-50;
}

.modal__body {
  @apply w-full p-2 bg-white max-w-[600px] rounded-xl mx-3 relative;
}

.modal__title {
  @apply text-xl text-center mb-1;
}

.modal__close-icon {
  @apply absolute top-2 right-2;
}
</style>
