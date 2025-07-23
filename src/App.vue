<script setup>
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />

  <main>
    <router-view />
  </main>

  <TheFooter />
</template>
