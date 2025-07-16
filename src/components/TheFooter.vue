<script setup></script>

<template>
  <footer>
    <!-- Container principal -->
    <div class="bg-[var(--primary-bg)] text-[var(--primary-text)] w-full h-[667px] relative">
      <!-- Logo -->
      <div class="absolute top-[161px] left-[262px]">
        <img class="w-[259px] h-[343px]" src="../assets/image/logo.svg" alt="Logo" />
      </div>

      <!-- Email, linha, links e direitos reservados -->
      <div class="absolute top-[217px] right-[52px] flex flex-col items-start">
        <!-- Email + ícone -->
        <div class="flex items-center gap-4">
          <h2 class="uppercase text-[64px] font-normal">carlosdanielbau@gmail.com</h2>
          <svg
            width="58.67"
            height="44"
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current"
          >
            <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
            <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
            <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>

        <!-- Linha -->
        <div class="w-[789px] h-0.5 bg-[var(--primary-line)] mt-2 mb-8"></div>

        <!-- Links -->
        <ul class="flex flex-col text-[22px] font-medium space-y-1">
          <li><a href="#projects" class="hover:underline">Projetos</a></li>
          <li><a href="#experience" class="hover:underline">Experiências</a></li>
          <li><a href="#about" class="hover:underline">Sobre mim</a></li>
        </ul>

        <!-- Direitos reservados -->
        <p class="mt-[120px] text-[14px] text-light">
          Todos os direitos reservados. © 2025 Design por Daniel Baú.
        </p>
      </div>
    </div>

    <!-- Faixa azul inferior com letreiro animado -->
    <div class="bg-[var(--primary-blue)] w-full h-[400px] overflow-hidden relative">
      <div
        class="absolute whitespace-nowrap animate-marquee font-bold uppercase leading-none text-[var(--primary-text)] tracking-tight text-[356.4px] scale-[1.04]"
      >
        <span v-for="i in 10" :key="i" class="mx-10">Daniel Baú - </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 120s linear infinite;
}
</style>
