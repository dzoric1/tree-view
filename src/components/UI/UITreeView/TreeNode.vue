<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { type TreeNodeData } from './types';

const props = defineProps<{
  data: TreeNodeData;
}>();

const emit = defineEmits(['select']);

const isExpanded = ref(false);
const hasChildren = props.data.children.length > 0;

const onClick = () => {
  if (hasChildren) {
    isExpanded.value = !isExpanded.value;
  } else {
    emit('select', props.data);
  }
};

const handleSelect = () => {
  emit('select', props.data);
};
</script>

<template>
  <div>
    <div @click="onClick">
      <span>{{ data.name }}</span>
      <span v-if="hasChildren">{{ isExpanded ? ' - ' : ' + ' }}</span>
    </div>
    <ul v-if="hasChildren" v-show="isExpanded">
      <li>
        <TreeNode
          v-for="child in data.children"
          :key="child.id"
          :data="child"
          @select="handleSelect"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
