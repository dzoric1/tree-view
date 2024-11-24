<script setup lang="ts">
import UIButton from '@/components/UI/UIButton.vue';
import UiModal from '@/components/UI/UIModal.vue';
import { ref } from 'vue';

const modalIsOpen = ref<boolean>(false);
</script>

<template>
  <div class="text-3xl mx-auto text-center">
    <UIButton text="Открыть диалоговое окно" @click="modalIsOpen = true" />

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
