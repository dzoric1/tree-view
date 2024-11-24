<script setup lang="ts"></script>

<template>
  <div class="icon"></div>
</template>

<style scoped>
.icon {
  position: relative;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
  }
}

.icon::before,
.icon::after {
  content: '';
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}

.icon::before {
  transform: rotate(45deg);
}

.icon::after {
  transform: rotate(-45deg);
}
</style>
