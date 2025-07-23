<script setup>
import { ref } from 'vue'
import Sk8 from '../assets/image/project-a-01.svg'
import IndieStore from '../assets/image/project-a-02.svg'
import SmartEase from '../assets/image/project-a-03.svg'
import Gasolina from '../assets/image/project-a-04.svg'
import GasolinaHero from '../assets/image/gasolina-hero.svg'
import pointIcon from '../assets/image/point.svg'
import LandingPageGasolina from '../assets/image/landing-page-gasolina.svg'
import SmartEaseHero from '../assets/image/smartease-hero.svg'
import LandingPageSmartEase from '../assets/image/landing-page-smart-ease.svg'
import TheModalProjectArea from '../components/modals/TheModalProjectArea.vue'

const projects = ref([
  {
    id: 1,
    title: 'SK8 Spot Map',
    image: Sk8,
    imageH: 'Em construção',
    imageL: 'Em breve você verá mais novidades',
    date: '07-2025',
    icon: pointIcon,
    imgWidth: '1800px',
    imgHeight: '922px',
    description:
      'O SK8 Spot Map está atualmente em fase de desenvolvimento. Em breve você poderá explorar um mapa interativo com os melhores spots de skate da sua região, salvar favoritos e compartilhar suas manobras com a comunidade. Fique ligado que vem muito mais por aí!',
  },
  {
    id: 2,
    title: 'Indie Store',
    image: IndieStore,
    imageH: 'Em construção',
    imageL: 'Em breve você verá mais novidades',
    date: '07-2025',
    icon: pointIcon,
    imgWidth: '1800px',
    imgHeight: '922px',
    description:
      'A Indie Store está em fase de desenvolvimento. Em breve você poderá descobrir e adquirir produtos exclusivos de desenvolvedores independentes, com curadoria artesanal e uma experiência de compra personalizada. Fique de olho para conhecer nossa seleção de jogos, arte e muito mais!',
  },
  {
    id: 3,
    title: 'Smart Ease',
    image: SmartEase,
    imageH: SmartEaseHero,
    imageL: LandingPageSmartEase,
    date: '07-2024',
    icon: pointIcon,
    imgWidth: '1800px',
    imgHeight: '922px',
    description:
      'O app SmartEase é um sistema de smart home que facilita o dia a dia, oferecendo controle prático e centralizado de dispositivos. Com diversas opções de automação, torna sua rotina mais inteligente e conveniente. Tudo em um só lugar, com facilidade e eficiência.',
  },
  {
    id: 4,
    title: 'Ga$olina App',
    image: Gasolina,
    imageH: GasolinaHero,
    imageL: LandingPageGasolina,
    date: '07-2025',
    icon: pointIcon,
    imgWidth: '1800px',
    imgHeight: '922px',
    description:
      'O app Ga$olina facilita a escolha do posto ideal para abastecer, priorizando economia e praticidade. Ele mostra opções organizadas por ranking e distância, garantindo acesso rápido e claro às melhores ofertas. Assim, o usuário economiza tempo e dinheiro.',
  },
])

const selectedProject = ref(null)

function onCardClick(project) {
  selectedProject.value = project
}

function closeModal() {
  selectedProject.value = null
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
            <img :src="project.icon" class="w-6 h-6 sm:w-8 sm:h-8" />
            <h3 class="font-bold text-[24px] sm:text-[32px]">{{ project.title }}</h3>
          </div>
          <time
            class="mt-2 sm:mt-0 sm:ml-auto text-[18px] sm:text-[22px] text-[var(--project-area-date)]"
          >
            {{ project.date }}
          </time>
        </div>
      </div>
    </div>

    <!-- Modal com transição fade -->
    <transition name="fade" appear>
      <TheModalProjectArea v-if="selectedProject" :project="selectedProject" @close="closeModal" />
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
