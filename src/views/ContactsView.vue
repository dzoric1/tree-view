<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-2 items-center">
    <div class="text-3xl mx-auto">Контакты</div>
    <a
      class="link"
      href="https://t.me/Dzoric1"
      target="_blank"
      rel="noopener noreferrer"
    >
      Telegram: @Dzoric1
    </a>
    <a class="link" href="mailto:gerasimov2099@gmail.com">
      Почта: gerasimov2099@gmail.com
    </a>
    <a
      class="link"
      href="https://hh.ru/resume/59f3b0afff09e5a6a10039ed1f6752724c4f68"
      target="_blank"
      rel="noopener noreferrer"
    >
      Резюме
    </a>
  </div>
</template>

<style scoped>
.link {
  @apply text-2xl text-blue-500 hover:opacity-50 transition-opacity;
}
</style>
