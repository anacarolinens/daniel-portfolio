<script setup>
import AdobeIco from '../../assets/image/logo-adobe.svg'
import UiIco from '../../assets/image/logo-ui.svg'
import FigmaIco from '../../assets/image/logo-figma.svg'
import UxIco from '../../assets/image/logo-ux.svg'

const skills = [
  {
    name: 'PHOTOSHOP',
    level: 'NÍVEL AVANÇADO',
    icon: AdobeIco,
  },
  {
    name: 'UI DESIGN',
    level: 'NÍVEL AVANÇADO',
    icon: UiIco,
  },
  {
    name: 'FIGMA',
    level: 'NÍVEL AVANÇADO',
    icon: FigmaIco,
  },
  {
    name: 'UX DESIGN',
    level: 'NÍVEL INTERMEDIÁRIO',
    icon: UxIco,
  },
  {
    name: 'ILLUSTRATOR',
    level: 'NÍVEL AVANÇADO',
    icon: AdobeIco,
  },
]
</script>

<template>
  <section id="habilidades" class="relative py-12">
    <div class="border-t border-[var(--line-color)] w-4/5 mx-auto mb-8"></div>
    <div class="flex flex-wrap justify-center items-center gap-12 px-4">
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="flex items-center gap-4 mb-4 w-full sm:w-auto justify-center sm:justify-start duration-400 transition-transform hover:scale-115"
      >
        <img :src="skill.icon" :alt="skill.name" class="w-[37px] h-[37px] flex-shrink-0" />
        <div class="flex flex-col justify-center leading-none">
          <span class="text-[25px] font-semibold mb-1 text-[var(--primary-textcolor)]">
            {{ skill.name }}
          </span>
          <span class="text-[10px] text-[var(--primary-textcolor)]">
            {{ skill.level }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Botão Baixar Currículo -->
  <div class="mt-8 flex justify-center px-4 mb-10">
    <div class="flex items-center space-x-0.5">
      <span class="w-[6px] h-[64px] bg-[var(--primary-bg)] flex-shrink-0"></span>
      <a
        href="/pdf/curriculo-daniel.pdf"
        download="curriculo-daniel.pdf"
        class="relative overflow-hidden uppercase flex items-center gap-2 h-[64px] px-6 bg-[linear-gradient(to_right,var(--primary-bg)_50%,var(--primary-bg)_50%,var(--primary-blue)_50%,var(--primary-blue)_50%)] bg-[length:200%_100%] bg-right text-[var(--primary-text)] hover:text-[var(--primary-text)] hover:bg-left transition-all duration-1000 ease-in-out whitespace-nowrap"
      >
        <img
          src="../../assets/image/download.svg"
          alt="ícone download"
          class="w-[19px] h-[21px] flex-shrink-0"
        />
        <span class="font-semibold text-[16px]">Baixar Currículo</span>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
