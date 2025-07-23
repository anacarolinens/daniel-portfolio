<script setup></script>

<template>
  <footer class="footer">
    <!-- Container principal -->
    <div
      class="bg-[var(--primary-bg)] text-[var(--primary-text)] w-full px-6 py-8 md:py-10 lg:py-12"
    >
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-36">
        <!-- Logo -->
        <div
          class="w-full lg:w-auto flex justify-center lg:justify-start mt-[40px] md:mt-[60px] lg:mt-[163px]"
        >
          <img
            src="../../assets/image/logo.svg"
            alt="Logo"
            class="w-[clamp(8rem,16vw,16rem)] lg:w-[258.99px] lg:h-[342.79px] h-auto lg:ml-[-40px]"
          />
        </div>

        <!-- Conteúdo -->
        <div class="flex flex-col items-start w-full flex-1 min-w-0 text-[20px] ml-0 lg:ml-[60px]">
          <!-- Email + ícone + linha no mesmo fluxo -->
          <div class="inline-flex flex-col mt-[40px] md:mt-[60px] lg:mt-[220px]">
            <!-- Email + ícone -->
            <div class="flex items-center gap-2 md:gap-4">
              <h2
                class="uppercase font-normal leading-tight break-words text-[clamp(1rem,4vw,4rem)]"
              >
                carlosdanielbau@gmail.com
              </h2>

              <!-- SVG que acompanha o texto -->
              <svg
                class="h-[clamp(1rem,4vw,4rem)] aspect-[22/17] stroke-current flex-shrink-0"
                viewBox="0 0 22 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
                <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
                <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </div>

            <!-- Linha alinhada ao tamanho do texto + svg -->
            <div
              class="h-0.5 bg-[var(--primary-line)] mt-2 md:mt-3 lg:mt-4 mb-[12px] md:mb-[20px] lg:mb-[49px] w-full"
            ></div>
          </div>

          <!-- Links -->
          <ul
            class="flex flex-col text-[clamp(1rem,2vw,1.375rem)] font-medium space-y-[16px] md:space-y-[24px] lg:space-y-[40px] mb-[24px] md:mb-[40px] lg:mb-[110px]"
          >
            <li><a href="#projetos" class="hover:underline">Projetos</a></li>
            <li><a href="#experiencias" class="hover:underline">Experiências</a></li>
            <li><a href="#sobre" class="hover:underline">Sobre mim</a></li>
          </ul>

          <!-- Rodapé -->
          <p class="text-sm lg:text-[14px] text-light mb-[16px] md:mb-[24px] lg:mb-[68px]">
            Todos os direitos reservados. © 2025 Desenvolvido por Daniel Baú.
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
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
