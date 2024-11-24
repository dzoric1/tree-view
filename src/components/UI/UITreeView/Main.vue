<script lang="ts" setup>
import TreeNode from './TreeNode.vue';
import { type TreeNodeData } from './types';

defineProps<{
  data: TreeNodeData[];
}>();

const emit = defineEmits(['select']);

const handleSelect = (node: TreeNodeData) => {
  emit('select', node);
};
</script>

<template>
  <div>
    <ul>
      <li>
        <TreeNode
          v-for="node in data"
          :key="node.id"
          :data="node"
          @select="handleSelect"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
