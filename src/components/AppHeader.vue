<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav class="header__nav">
      <RouterLink class="header__nav-link" :to="{ name: 'home' }">
        Главная
      </RouterLink>
      <RouterLink class="header__nav-link" :to="{ name: 'contacts' }">
        Контакты
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply bg-gray-100 py-4 shadow-md;
}

.header__nav {
  @apply flex items-center justify-center gap-4;
}
.header__nav-link {
  @apply text-blue-500 hover:opacity-50 transition-opacity;
}
</style>
