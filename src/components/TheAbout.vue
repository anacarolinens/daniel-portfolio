<script setup></script>

<template>
  <section
    class="relative flex flex-col items-center justify-center text-center px-8 sm:px-10 md:px-0 py-12 sm:py-16 md:py-24 bg-white overflow-hidden min-h-[auto] md:min-h-[1465px]"
  >
    <!-- Imagem decorativa esquerda só a partir de 1465px -->
    <img
      src="../assets/image/about-l.svg"
      alt="Decor Left"
      class="hidden min-[1465px]:block absolute left-[60px] top-0 h-full w-[124px] object-contain"
    />

    <!-- Imagem decorativa direita só a partir de 1465px -->
    <img
      src="../assets/image/about-r.svg"
      alt="Decor Right"
      class="hidden min-[1465px]:block absolute right-[60px] top-0 h-full w-[221px] object-contain"
    />

    <!-- LOGO -->
    <div class="mb-4 sm:mb-6 md:mb-12 mt-8 sm:mt-10 md:mt-12">
      <img
        src="../assets/image/logo-about.svg"
        alt="Logo estilizada"
        class="w-[200px] sm:w-[260px] md:w-[317px] mx-auto"
      />
    </div>

    <!-- TÍTULO -->
    <h2
      class="font-chakra px-2 font-bold text-black uppercase mb-6 sm:mb-8 md:mb-12 text-[40px] sm:text-[64px] md:text-[130px] leading-none tracking-tight sm:tracking-[-0.02em] md:tracking-[-0.03em]"
    >
      QUEM SOU EU
    </h2>

    <!-- TEXTOS -->
    <div
      class="mx-auto max-w-full sm:max-w-md md:max-w-[528px] text-[16px] sm:text-[18px] md:text-[22px] leading-[24px] sm:leading-[28px] md:leading-[32px] text-[var(---primary-textcolor)]"
    >
      <p class="mb-4 sm:mb-6 md:mb-8">
        Sou graduado em Designer Gráfico pela UPF e estou redirecionando minha carreira para UI/UX
        Design. Com seis meses de estudo após a formação. Adquiri experiência prática em uma
        agência, na qual trabalhei de novembro de 2022 até outubro de 2023 onde desenvolvi sites e
        versões mobile.
      </p>
      <p>
        Busco uma nova oportunidade para expandir minha especialização, contribuir para projetos
        inovadores e continuar meu crescimento profissional. Estou entusiasmado e pronto para
        discutir como posso agregar valor à equipe em uma entrevista.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
