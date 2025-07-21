<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav
    class="bg-[var(--primary-bg)] text-[var(--primary-text)] w-full border-b border-[var(--primary-text)] relative font-bold"
  >
    <div class="w-full px-4 lg:px-16">
      <div class="flex items-center justify-between h-[64px]">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <a href="#">
            <img
              class="w-[34px] h-[45px] transform -translate-y-1"
              src="../../assets/image/logo.svg"
              alt="Logo"
            />
          </a>
          <span class="text-xl uppercase text-[22px]">Daniel Ba[ú]</span>
        </div>

        <!-- Desktop Links -->
        <div class="hidden lg:flex items-center">
          <a
            href="#projetos"
            class="flex items-center px-8 border-l border-[var(--primary-text)] uppercase hover:text-[var(--primary-bg)] hover:bg-[var(--primary-text)] transition duration-500 gap-2 h-[64px]"
          >
            <span>Projetos</span>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[15px] stroke-current"
            >
              <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
              <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
              <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </a>
          <a
            href="#experiencias"
            class="flex items-center px-8 border-l border-[var(--primary-text)] uppercase hover:text-[var(--primary-bg)] hover:bg-[var(--primary-text)] transition duration-500 gap-2 h-[64px]"
          >
            <span>Experiências</span>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[15px] stroke-current"
            >
              <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
              <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
              <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </a>
          <a
            href="#sobre"
            class="flex items-center px-8 border-l border-r border-[var(--primary-text)] uppercase hover:text-[var(--primary-bg)] hover:bg-[var(--primary-text)] transition duration-500 gap-2 h-[64px]"
          >
            <span>Sobre Mim</span>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[15px] stroke-current"
            >
              <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
              <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
              <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </a>
        </div>

        <!-- Desktop Contact -->
        <div class="hidden lg:block ml-4 border-l-4 border-[var(--primary-text)] pl-1">
          <a
            href="#contato"
            class="relative overflow-hidden uppercase px-12 py-2 h-[64px] flex items-center gap-2 bg-[linear-gradient(to_right,var(--primary-text)_50%,var(--primary-text)_50%,var(--primary-blue)_50%,var(--primary-blue)_50%)] bg-[length:200%_100%] bg-right text-[var(--primary-text)] hover:text-[var(--primary-bg)] hover:bg-left transition-all duration-1000 ease-in-out whitespace-nowrap"
          >
            <span>Contato</span>
            <svg
              width="22"
              height="17"
              viewBox="0 0 22 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px] h-[15px] stroke-current"
            >
              <path d="M7 5H15M15 5V13M15 5L7 13" stroke="currentColor" stroke-width="1.5" />
              <path d="M3 1H1V16H3" stroke="currentColor" stroke-width="1.5" />
              <path d="M19 1H21V16H19" stroke="currentColor" stroke-width="1.5" />
            </svg>
          </a>
        </div>

        <!-- Mobile Toggle Button -->
        <button
          class="lg:hidden p-2 focus:outline-none text-[var(--primary-text)]"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-[64px] right-0 w-full bg-[var(--primary-bg)] shadow-lg text-[var(--primary-text)] border-t border-[var(--primary-text)] z-50"
    >
      <a
        href="#projetos"
        class="block px-8 py-4 hover:bg-gray-200 transition hover:text-[var(--primary-bg)]"
        >Projetos</a
      >
      <a
        href="#experiencias"
        class="block px-8 py-4 hover:bg-gray-200 transition hover:text-[var(--primary-bg)]"
        >Experiências</a
      >
      <a
        href="#sobre"
        class="block px-8 py-4 hover:bg-gray-200 transition hover:text-[var(--primary-bg)]"
        >Sobre Mim</a
      >
      <div class="border-t border-[var(--primary-text)]">
        <a
          href="#contato"
          class="block px-8 py-4 bg-[var(--primary-blue)] hover:bg-blue-800 text-white transition"
        >
          Contato
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
