<script setup></script>

<template>
  <footer>
    <!-- Container principal -->
    <div class="bg-[var(--primary-bg)] text-[var(--primary-text)] w-full px-6 py-12">
      <div
        class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:mt-12"
      >
        <!-- Logo (centralizada em telas pequenas/médias) -->
        <div class="w-full lg:w-auto flex justify-center lg:justify-start mt-12 md:mt-12">
          <img
            class="w-40 sm:w-56 md:w-64 lg:w-[259px]"
            src="../assets/image/logo.svg"
            alt="Logo"
          />
        </div>

        <!-- Email, linha, links e direitos reservados -->
        <div class="flex flex-col items-start w-full lg:w-auto">
          <!-- Email + ícone -->
          <div class="flex flex-wrap items-center gap-4">
            <h2
              class="uppercase text-xl sm:text-2xl md:text-4xl lg:text-[64px] font-normal break-all"
            >
              carlosdanielbau@gmail.com
            </h2>
            <svg
              class="w-6 h-6 md:w-10 md:h-10 lg:w-[58.67px] lg:h-[44px] stroke-current"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
              <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
              <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </div>

          <!-- Linha -->
          <div class="w-full h-0.5 bg-[var(--primary-line)] mt-4 mb-6"></div>

          <!-- Links -->
          <ul class="flex flex-col text-base md:text-lg lg:text-[22px] font-medium space-y-1">
            <li><a href="#projects" class="hover:underline">Projetos</a></li>
            <li><a href="#experience" class="hover:underline">Experiências</a></li>
            <li><a href="#about" class="hover:underline">Sobre mim</a></li>
          </ul>

          <!-- Direitos reservados -->
          <p class="mt-8 text-sm text-light">
            Todos os direitos reservados. © 2025 Design por Daniel Baú.
          </p>
        </div>
      </div>
    </div>

    <!-- Faixa azul inferior com letreiro animado -->
    <div
      class="bg-[var(--primary-blue)] w-full min-h-[100px] md:min-h-[180px] lg:min-h-[300px] xl:min-h-[400px] overflow-hidden relative flex items-center"
    >
      <div
        class="whitespace-nowrap animate-marquee font-bold uppercase leading-none text-[var(--primary-text)] tracking-tight text-[64px] sm:text-[96px] md:text-[150px] lg:text-[250px] xl:text-[356.4px]"
      >
        <span v-for="i in 10" :key="i" class="mx-1">Daniel Baú - </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}

.animate-marquee {
  animation: marquee 120s linear infinite;
  will-change: transform; /* dica para o navegador otimizar a performance */
}

.animate-marquee:hover {
  animation-play-state: paused; /* Pausa no hover */
}
</style>
