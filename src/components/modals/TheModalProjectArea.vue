<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

onMounted(() => document.body.classList.add('overflow-hidden'))
onBeforeUnmount(() => document.body.classList.remove('overflow-hidden'))
</script>

<template>
  <!-- backdrop -->
  <div class="fixed inset-0 bg-black/50 z-50" @click.self="emit('close')">
    <!-- modal container -->
    <div
      class="absolute top-[77px] left-0 right-0 bottom-0 bg-white overflow-hidden shadow-2xl w-full"
    >
      <!-- botão flutuante fixo-->
      <button
        @click="emit('close')"
        class="fixed bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-[32px] right-2 sm:right-4 md:right-6 lg:right-[48px] mb-2 sm:mb-4 md:mb-6 lg:mb-[65px] mr-2 sm:mr-4 md:mr-6 lg:mr-[55px] z-50 w-10 sm:w-12 md:w-14 lg:w-[65px] h-10 sm:h-12 md:h-14 lg:h-[65px] bg-[var(--primary-blue)] flex items-center justify-center shadow-lg bg-[linear-gradient(to_right,var(--primary-bg)_50%,var(--primary-bg)_50%,var(--primary-blue)_50%,var(--primary-blue)_50%)] bg-[length:200%_100%] bg-right text-[var(--primary-text)] hover:bg-left transition-all duration-1000 ease-in-out whitespace-nowrap"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- conteúdo com rolagem -->
      <div class="p-8 overflow-auto h-full">
        <!-- ícone -->
        <img :src="props.project.icon" alt="" class="w-[37.92px] h-[41px] mb-6 mt-8" />

        <div
          class="flex flex-col items-center text-center space-y-2 mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[180px] mb-[24px] sm:mb-[48px] md:mb-[96px] lg:mb-[152px]"
        >
          <span
            class="font-medium text-[24px] sm:text-[48px] md:text-[64px] text-[var(--project-area-date)] leading-none"
          >
            {{ props.project.date }}
          </span>
          <h2
            class="font-chakra font-bold text-black uppercase mb-6 sm:mb-8 md:mb-12 text-[40px] sm:text-[64px] md:text-[130px] leading-none tracking-tight sm:tracking-[-0.02em] md:tracking-[-0.03em]"
          >
            {{ props.project.title }}
          </h2>
        </div>
        <!-- imagem do projeto -->
        <div
          class="mx-auto overflow-hidden drop-shadow-xl/25 rounded-lg w-full"
          :class="`lg:w-[${props.project.imgWidth}] lg:h-[${props.project.imgHeight}]`"
        >
          <img
            :src="props.project.imageH"
            :alt="`Landing ${props.project.title}`"
            class="w-full h-full object-contain"
          />
        </div>

        <!-- Parágrafo dinâmico -->
        <p
          v-if="props.project.description"
          class="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] leading-snug mt-8 sm:mt-10 md:mt-16 mb-12 sm:mb-16 md:mb-24 max-w-[90%] mx-auto text-center"
        >
          {{ props.project.description }}
        </p>

        <!-- Imagem inferior -->
        <div v-if="props.project.imageL">
          <img
            :src="props.project.imageL"
            :alt="`Landing extra de ${props.project.title}`"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
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
