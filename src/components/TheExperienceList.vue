<script setup>
import pointIcon from '../assets/image/point.png'
const { points } = defineProps({
  points: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul
    class="flex flex-col md:flex-row md:flex-wrap justify-start lg:gap-[90px] gap-y-12 md:gap-y-4 list-none lg:mt-15 mb-15"
  >
    <li
      v-for="(text, idx) in points"
      :key="idx"
      class="w-[426px] flex flex-col items-start md:items-start text-start md:text-left space-y-8 px-12"
    >
      <img :src="pointIcon" alt="Ícone ponto" class="w-8 h-8" />
      <p class="text-base sm:text-lg leading-relaxed text-[var(---primary-textcolor)] break-words">
        {{ text }}
      </p>
    </li>
  </ul>
</template>

<style scoped></style>
