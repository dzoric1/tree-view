<script setup lang="ts">
import { ref } from 'vue';
import TreeNode from './TreeNode.vue';
import { type TreeNodeData } from './types';

const props = defineProps<{
  data: TreeNodeData[];
  modelValue: number | null;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', id: number | null): void;
}>();

const selectedNodeId = ref<number | null>(props.modelValue ?? null);

const onNodeSelect = (id: number) => {
  selectedNodeId.value = id;
  emits('update:modelValue', id);
};
</script>

<template>
  <div class="tree-view">
    <ul class="tree">
      <li v-for="node in data" :key="node.id">
        <TreeNode
          :node="node"
          :selectedId="selectedNodeId"
          @select="onNodeSelect"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tree {
  @apply flex flex-col gap-2;
}
</style>
