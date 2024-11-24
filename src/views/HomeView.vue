<script setup lang="ts">
import UIButton from '@/components/UI/UIButton.vue';
import UIModal from '@/components/UI/UIModal.vue';
import UITreeView from '@/components/UI/UITreeView';
import { useMockStore } from '@/stores/mock';
import { ref } from 'vue';

const modalIsOpen = ref<boolean>(false);
const mockStore = useMockStore();
const selectedFolderId = ref<number | null>(null);

const onConfirm = () => {
  modalIsOpen.value = false;
  mockStore.setSelectedFileId(selectedFolderId.value);
};

const onOpenModal = () => {
  modalIsOpen.value = true;
  selectedFolderId.value = null;
};
</script>

<template>
  <div class="home">
    <UIButton text="Открыть" @click="onOpenModal" />

    <div>
      {{
        mockStore.getSelectedFileId()
          ? `ID выбранной папки: ${mockStore.getSelectedFileId()}`
          : 'Файл не выбран'
      }}
    </div>

    <teleport to="body">
      <Transition name="fade">
        <UIModal
          v-if="modalIsOpen"
          title="Выбор папки"
          @close="modalIsOpen = false"
          @confirm="onConfirm"
        >
          <UITreeView :data="mockStore.getData()" v-model="selectedFolderId" />
        </UIModal>
      </Transition>
    </teleport>
  </div>
</template>

<style scoped>
.home {
  @apply text-3xl mx-auto text-center flex flex-col items-center;
}
</style>
