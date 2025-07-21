<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import expArea from '../../assets/image/exp-area.png'
import expArea2 from '../../assets/image/exp-area-2.png'
import TheExperienceList from '../lists/TheExperienceList.vue'

const windowWidth = ref(window.innerWidth)
function handleResize() {
  windowWidth.value = window.innerWidth
}
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

const isLarge = computed(() => windowWidth.value >= 1265)

const points = [
  'Atuei durante um ano no desenvolvimento de landing pages para uma agência de vendas de produtos, sendo responsável por toda a estrutura do site, incluindo o design visual e a adaptação para dispositivos móveis. Meu trabalho envolvia desde o layout até a otimização da experiência do usuário.',
  'Trabalhei de forma autônoma por mais de três anos, desenvolvendo layouts para sites e aplicativos mobile. Nesse período, fui responsável pela criação de interfaces intuitivas e visualmente atrativas, sempre buscando alinhar usabilidade, identidade visual e objetivos do projeto.',
]
</script>

<template>
  <!-- Imagem + Título -->
  <section :class="isLarge ? 'flex flex-row w-full' : 'flex flex-col w-full'">
    <div v-if="!isLarge" class="w-full mb-10 p-0">
      <img :src="expArea2" alt="Experiência alternativa" class="w-full h-auto object-contain" />
    </div>
    <div v-else class="w-[1020px] mb-10 p-0">
      <img :src="expArea" alt="Experiência" class="w-full h-auto max-h-[766px] object-contain" />
    </div>

    <div
      class="flex justify-center md:justify-start items-center w-full pl-2 md:pl-4 lg:pl-18 mb-8"
    >
      <h2
        class="font-chakra font-bold text-black uppercase mb-6 sm:mb-8 md:mb-12 text-[40px] sm:text-[64px] md:text-[130px] leading-none tracking-tight sm:tracking-[-0.02em] md:tracking-[-0.03em]"
      >
        EXPERIÊNCIAS <br />
        DE MERCADO
      </h2>
    </div>
  </section>

  <div class="mt-8 flex justify-center">
    <TheExperienceList :points="points" />
  </div>
</template>

<style scoped></style>
