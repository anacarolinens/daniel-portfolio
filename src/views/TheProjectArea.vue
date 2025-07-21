<script setup>
import { ref } from 'vue'
import Sk8 from '../assets/image/project-a-01.svg'
import IndieStore from '../assets/image/project-a-02.svg'
import SmartEase from '../assets/image/project-a-03.svg'
import Gasolina from '../assets/image/project-a-04.svg'

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
  <section class="px-8 py-12">
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      <div
        v-for="project in projects"
        :key="project.id"
        class="w-[576px] h-[585px] border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition flex flex-col"
        @click="onCardClick(project)"
      >
        <!-- imagem ocupa toda a largura e uma altura fixa no topo -->
        <div
          class="w-full h-[430px] bg-center"
          :style="{ backgroundImage: `url(${project.image})` }"
        ></div>
        <!-- rodapé do card com title + date -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <h3 class="font-semibold">{{ project.title }}</h3>
          <time class="text-sm text-[var(--project-area)]">{{ project.date }}</time>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
