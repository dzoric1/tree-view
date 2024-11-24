<script setup lang="ts">
import UIButton from '@/components/UI/UIButton.vue';
import UIModal from '@/components/UI/UIModal.vue';
import UITreeView from '@/components/UI/UITreeView';
import { useMockStore } from '@/stores/mock';
import { ref } from 'vue';

const modalIsOpen = ref<boolean>(false);
const mockStore = useMockStore();

const onConfirm = () => {
  modalIsOpen.value = false;
};

const onSelect = (e: Event) => {
  modalIsOpen.value = false;
  console.log(e);
};
</script>

<template>
  <div class="text-3xl mx-auto text-center">
    <UIButton text="Открыть" @click="modalIsOpen = true" />

    <teleport to="body">
      <Transition name="fade">
        <UIModal
          v-if="modalIsOpen"
          title="Выбор файла"
          @close="modalIsOpen = false"
          @confirm="onConfirm"
        >
          <UITreeView :data="mockStore.getData()" @select="onSelect" />
        </UIModal>
      </Transition>
    </teleport>
  </div>
</template>

<style scoped></style>
