<script setup lang="ts">
import UiModal from '@/components/UI/UIModal.vue';
import { ref } from 'vue';

const modalIsOpen = ref<boolean>(false);
</script>

<template>
  <div class="text-3xl mx-auto text-center">
    <button @click="modalIsOpen = !modalIsOpen">Открыть модальное окно</button>

    <teleport to="body">
      <Transition name="fade">
        <UiModal
          v-if="modalIsOpen"
          title="Диалоговое окно"
          @close="modalIsOpen = false"
        />
      </Transition>
    </teleport>
  </div>
</template>
