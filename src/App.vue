<script setup>
import TheAbout from './components/TheAbout.vue'
import TheAsciiArt from './components/TheAsciiArt.vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <TheAsciiArt />
    <TheAbout />
  </main>
  <TheFooter />
</template>

<style scoped></style>
