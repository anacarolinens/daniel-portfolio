<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import expArea from '../assets/image/exp-area.png'
import expArea2 from '../assets/image/exp-area-2.png'
import TheExperienceList from './TheExperienceList.vue'

const windowWidth = ref(window.innerWidth)
function handleResize() {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

const isLarge = computed(() => windowWidth.value >= 1265)
const headingSize = computed(() => {
  if (windowWidth.value < 768) return 40
  if (windowWidth.value < 1465) return 64
  return 130
})

const points = [
  'Choose from a roster of cybernetic mercenaries with unique abilities. Customize your Runners playstyle with the weapons, implants, and equipment you collect on your runs. Strategize, execute, and become Tau Ceti’s most feared mercenary.',
  'Choose from a roster of cybernetic mercenaries with unique abilities. Customize your Runners playstyle with the weapons, implants, and equipment you collect on your runs. Strategize, execute, and become Tau Ceti’s most feared mercenary.',
]
</script>

<template>
  <!-- Imagem + Título -->
  <section :class="isLarge ? 'flex flex-row w-full' : 'flex flex-col w-full'">
    <div v-if="!isLarge" class="w-full mb-10 p-0">
      <img :src="expArea2" alt="Experiência alternativa" class="w-full h-auto object-contain" />
    </div>
    <div v-else class="w-[990px] mb-10 p-0">
      <img :src="expArea" alt="Experiência" class="w-full h-auto max-h-[766px] object-contain" />
    </div>

    <div class="flex justify-center md:justify-start items-center w-full md:pl-[69px] mb-8">
      <h2
        :style="{ fontSize: headingSize + 'px' }"
        class="font-chakra font-bold text-black uppercase leading-none tracking-tight text-center md:text-left ml-10 px-8"
      >
        EXPERIÊNCIAS DE MERCADO
      </h2>
    </div>
  </section>

  <div class="mt-8 flex justify-center">
    <TheExperienceList :points="points" />
  </div>
</template>

<style scoped></style>
