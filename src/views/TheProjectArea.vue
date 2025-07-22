<script setup>
import { ref } from 'vue'
import Sk8 from '../assets/image/project-a-01.svg'
import IndieStore from '../assets/image/project-a-02.svg'
import SmartEase from '../assets/image/project-a-03.svg'
import Gasolina from '../assets/image/project-a-04.svg'
import pointIcon from '../assets/image/point.svg'

const projects = ref([
  {
    id: 1,
    title: 'SK8 Spot Map',
    image: Sk8,
    date: '07-2025',
    link: '',
  },
  {
    id: 2,
    title: 'Indie Store',
    image: IndieStore,
    date: '07-2025',
    link: '',
  },
  {
    id: 3,
    title: 'Smart Ease',
    image: SmartEase,
    date: '07-2025',
    link: '',
  },
  {
    id: 4,
    title: 'Ga$olina App',
    image: Gasolina,
    date: '07-2025',
    link: '',
  },
])

function onCardClick(project) {
  // função modal
  console.log('Clicou em', project.title)
}
</script>

<template>
  <section id="area-projeto" class="px-4 sm:px-8 py-12 mt-10">
    <!-- Header -->
    <header class="mb-6 flex items-center">
      <h2 class="text-[36px] font-bold uppercase">
        MEUS PROJETOS
        <span class="text-[28px] text-[var(--project-area)]">
          ({{ projects.length.toString().padStart(2, '0') }})
        </span>
      </h2>
    </header>

    <!-- Grid de cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      <div
        v-for="project in projects"
        :key="project.id"
        class="flex flex-col items-center cursor-pointer"
        @click="onCardClick(project)"
      >
        <!-- Card -->
        <div class="w-full max-w-[576px] mt-5">
          <img :src="project.image" :alt="project.title" class="w-full h-auto object-contain" />
        </div>

        <!-- Rodapé -->
        <div class="mt-4 flex flex-col sm:flex-row sm:items-center w-full max-w-[576px]">
          <div class="flex items-center gap-2 sm:gap-4">
            <img :src="pointIcon" class="w-6 h-6 sm:w-8 sm:h-8" />
            <h3 class="font-bold text-[24px] sm:text-[32px]">{{ project.title }}</h3>
          </div>
          <time
            class="mt-2 sm:mt-0 sm:ml-auto text-[18px] sm:text-[22px] text-[var(--project-area)]"
          >
            {{ project.date }}
          </time>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
