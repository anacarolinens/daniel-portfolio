<script setup>
import TheProjectList from './TheProjectList.vue'
</script>

<template>
  <section class="py-12">
    <!-- Preview -->
    <div class="w-full mb-15 mt-20 lg:px-10 md:px-8 px-12">
      <TheProjectList />
    </div>

    <!-- Container principal -->
    <div class="w-full mb-20 lg:px-[62px] px-6">
      <!-- Título -->
      <h2
        class="font-chakra font-bold text-black uppercase mb-6 sm:mb-8 md:mb-12 text-[40px] sm:text-[64px] md:text-[130px] leading-none tracking-tight sm:tracking-[-0.02em] md:tracking-[-0.03em]"
      >
        PROJETOS<br />CONCLUÍDOS
      </h2>

      <!-- Descrição -->
      <p
        class="max-w-[615px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed text-[var(--primary-bg)] mb-12"
      >
        Meus projetos incluem trabalhos desenvolvidos para clientes, assim como projetos autorais
        criados com fins de estudo e demonstração das minhas habilidades e conhecimentos.
      </p>

      <!-- Botão Veja mais aqui -->
      <div class="w-full flex items-center space-x-0.5 justify-center md:justify-start">
        <span class="w-1.5 h-16 bg-[var(--primary-bg)] flex-shrink-0"></span>
        <a
          href="/pdf/curriculo-daniel.pdf"
          download="curriculo-daniel.pdf"
          class="relative overflow-hidden uppercase flex items-center gap-2 h-16 px-6 bg-[linear-gradient(to_right,var(--primary-bg)_50%,var(--primary-bg)_50%,var(--primary-blue)_50%,var(--primary-blue)_50%)] bg-[length:200%_100%] bg-right text-[var(--primary-text)] hover:bg-left transition-all duration-1000 ease-in-out whitespace-nowrap"
        >
          <span class="font-semibold text-[16px]">Veja mais aqui</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 17"
            class="w-5 h-4 stroke-current"
            fill="none"
          >
            <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
            <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
            <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
