<script setup>
import pointIcon from '../assets/image/point.svg'
const { points } = defineProps({
  points: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul
    class="flex flex-col md:flex-row md:flex-wrap justify-start lg:gap-[75px] gap-y-12 md:gap-y-4 list-none lg:mt-15 mb-10 px-4"
  >
    <li
      v-for="(text, idx) in points"
      :key="idx"
      class="md:w-[556px] flex flex-col items-start md:items-start text-start md:text-left space-y-8 px-2"
    >
      <img :src="pointIcon" alt="Ícone ponto" class="w-8 h-8" />
      <p
        class="text-base sm:text-lg leading-relaxed text-[16px] sm:text-[18px] md:text-[22px] text-[var(---primary-textcolor)] break-words mb-4"
      >
        {{ text }}
      </p>
    </li>
  </ul>
</template>

<style scoped></style>
