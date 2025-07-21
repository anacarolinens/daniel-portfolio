<script setup></script>

<template>
  <section class="px-4 sm:px-0">
    <ul class="flex justify-center gap-4 sm:justify-start">
      <!-- Projeto 1 (sempre visível) -->
      <li class="rounded-lg overflow-hidden drop-shadow-xl/25 w-full max-w-[576px] max-h-[585px]">
        <img
          src="../../assets/image/project-01.svg"
          alt="Projeto 1"
          class="w-full h-auto object-cover"
        />
      </li>

      <!-- Projeto 2 (visível a partir de sm) -->
      <li
        class="hidden sm:flex sm:flex-shrink-0 rounded-lg overflow-hidden drop-shadow-xl/25"
        :class="[
          'sm:[width:clamp(132.37px,25vw,488px)]',
          'sm:[height:clamp(118.27px,calc(25vw*0.89344),436px)]',
        ]"
      >
        <img
          src="../../assets/image/project-02.svg"
          alt="Projeto 2"
          class="w-full h-full object-cover"
        />
      </li>

      <!-- Projeto 3 (visível a partir de md) -->
      <li
        class="hidden md:flex md:flex-shrink-0 rounded-lg overflow-hidden drop-shadow-xl/25"
        :class="[
          'md:[width:clamp(150px,30vw,377px)]',
          'md:[height:clamp(249.15px,calc(30vw*1.661),626px)]',
        ]"
      >
        <img
          src="../../assets/image/project-03.svg"
          alt="Projeto 3"
          class="w-full h-full object-cover"
        />

        <!-- Projeto 4 (apenas em lg) -->
      </li>

      <li
        class="hidden lg:flex lg:flex-shrink-0 rounded-lg overflow-hidden drop-shadow-xl/25"
        :class="[
          'lg:[width:clamp(120px,20vw,330px)]',
          'lg:[height:clamp(143.64px,calc(20vw*1.197),395px)]',
        ]"
      >
        <img
          src="../../assets/image/project-04.svg"
          alt="Projeto 4"
          class="w-full h-full object-cover"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
