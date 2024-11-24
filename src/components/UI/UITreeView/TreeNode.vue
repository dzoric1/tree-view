<script setup lang="ts">
import ChevronIcon from '@/components/icons/ChevronIcon.vue';
import { computed, defineEmits, defineProps, ref } from 'vue';
import { type TreeNodeData } from './types';

const props = defineProps<{
  node: TreeNodeData;
  selectedId: number | null;
}>();

const emit = defineEmits<{
  (e: 'select', id: number): void;
}>();

const isOpen = ref(false);
const isSelected = computed(() => props.selectedId === props.node.id);

const toggleChildren = () => {
  isOpen.value = !isOpen.value;
};

const handleClick = () => {
  emit('select', props.node.id);
};
</script>

<template>
  <div>
    <div
      class="tree-node"
      :class="{ selected: isSelected }"
      @click.stop="handleClick"
    >
      <span>{{ `id: ${node.id} - ${node.name}` }}</span>
      <span
        v-if="node.children.length"
        @click.stop="toggleChildren"
        class="icon"
        :class="{ 'rotate-90': isOpen }"
      >
        <ChevronIcon />
      </span>
    </div>

    <Transition name="fade">
      <ul v-if="isOpen" class="tree-node__children">
        <li v-for="child in node.children" :key="child.id">
          <TreeNode
            :node="child"
            :selectedId="selectedId"
            @select="$emit('select', $event)"
          />
        </li>
      </ul>
    </Transition>
  </div>
</template>

<style scoped>
.tree-node {
  @apply cursor-pointer bg-blue-200 w-max p-3 rounded-lg flex items-center gap-2;
}
.tree-node__children {
  @apply mt-2 pl-5 flex flex-col gap-2;
}
.selected {
  @apply bg-blue-900 text-white;
}

.icon {
  @apply cursor-pointer hover:bg-blue-300 w-5 h-5 rounded-md flex items-center justify-center p-1;
}

.icon--active {
  @apply transform rotate-90 transition-all;
}
</style>
