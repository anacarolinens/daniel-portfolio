<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import p5 from 'p5'

// ——————————————————————————————
// 1) ASCII-art de fundo (p5.js)
// ——————————————————————————————
const asciiContainer = ref(null)
let sketchInstance = null

const sketch = (p) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>?/|\\-=+~:;"\',.`'
  const cellSize = 38
  let waves = []

  const hexToRgb = (hex) => {
    const h = hex.replace('#', '')
    const i = parseInt(h, 16)
    return { r: (i >> 16) & 255, g: (i >> 8) & 255, b: i & 255 }
  }

  p.setup = () => {
    p.createCanvas(window.innerWidth, asciiContainer.value.clientHeight).parent(
      asciiContainer.value,
    )
    p.textFont('monospace', cellSize)
    p.textAlign(p.CENTER, p.CENTER)
    p.frameRate(30)
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, asciiContainer.value.clientHeight)
  }

  p.mouseMoved = () => {
    waves.push({ x: p.mouseX, y: p.mouseY, radius: 0, max: 400 })
  }

  p.draw = () => {
    p.background(0)
    const base = getComputedStyle(asciiContainer.value).getPropertyValue('--ascii-art').trim()
    const { r, g, b } = hexToRgb(base)

    waves.forEach((w) => (w.radius += 8))
    waves = waves.filter((w) => w.radius < w.max)

    for (let y = 0; y < p.height; y += cellSize) {
      for (let x = 0; x < p.width; x += cellSize) {
        const n = p.noise(x * 0.008, y * 0.008, p.frameCount * 0.005)
        const idx = p.floor(p.map(n * 255, 0, 255, chars.length - 1, 0))
        let alpha = 50

        waves.forEach((w) => {
          const d = p.dist(x, y, w.x, w.y)
          const diff = Math.abs(d - w.radius)
          if (diff < 40) alpha = p.map(diff, 0, 40, 255, 100)
        })

        p.noStroke()
        p.fill(`rgba(${r},${g},${b},${alpha / 255})`)
        p.text(chars[idx], x + cellSize / 2, y + cellSize / 2)
      }
    }
  }
}

onMounted(() => {
  sketchInstance = new p5(sketch)
})

onBeforeUnmount(() => {
  if (sketchInstance) sketchInstance.remove()
})

// ——————————————————————————————
// 2) Estrutura
// ——————————————————————————————
const phraseStructs = [
  // 1ª frase
  {
    lines: [
      [
        { text: 'Design', colorClass: 'bg-[var(--primary-gray)] text-[var(--primary-blue)]' },
        { text: 'é a', colorClass: 'bg-[var(--primary-text)] text-[var(--primary-bg)]' },
        { text: 'busca', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-bg)]' },
      ],
      [
        {
          text: 'constante da forma, uma forma',
          colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]',
        },
      ],
      [
        { text: 'de sensibilizar', colorClass: 'bg-[#CECECE] text-[var(--primary-bg)]' },
        { text: 'a alma.', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]' },
      ],
    ],
  },
  // 2ª frase
  {
    lines: [
      [
        { text: 'Comunicação', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]' },
        { text: 'não é só', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-blue)]' },
      ],
      [
        { text: 'falar,', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-bg)]' },
        { text: 'ver ou ouvir', colorClass: 'bg-[var(--primary-gr)] text-[var(--primary-bg)]' },
      ],
      [
        { text: 'é fazer', colorClass: 'bg-[var(--primary-text)] text-[var(--primary-bg)]' },
        { text: 'entender!', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]' },
      ],
    ],
  },
  // 3ª frase
  {
    lines: [
      [
        { text: 'Design', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-text)]' },
        { text: 'dá ao', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-blue)]' },
        { text: 'mundo', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-bg)]' },
      ],
      [
        {
          text: 'algo que ele não sabia',
          colorClass: 'bg-[var(--primary-text)] text-[var(--primary-bg)]',
        },
      ],
      [
        { text: 'que sentia', colorClass: 'bg-[var(--primary-gr)] text-[var(--primary-bg)]' },
        { text: 'falta', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]' },
      ],
    ],
  },
  // 4ª frase
  {
    lines: [
      [
        { text: 'Arte +', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-text)]' },
        { text: 'Design +', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-blue)]' },
        { text: 'Estilo+', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-bg)]' },
      ],
      [
        { text: 'Inovação +', colorClass: 'bg-[var(--primary-text)] text-[var(--primary-bg)]' },
        {
          text: 'Sustentabilidade =',
          colorClass: 'bg-[var(--primary-text)] text-[var(--primary-bg)]',
        },
      ],
      [{ text: 'Produto final.', colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]' }],
    ],
  },
  // 5ª frase
  {
    lines: [
      [
        { text: 'O bom design', colorClass: 'bg-[var(--primary-text)] text-[var(--primary-blue)]' },
        {
          text: 'acontece',
          colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-text)]',
        },
      ],
      [
        {
          text: 'quando',
          colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-bg)]',
        },
        {
          text: 'o designer',
          colorClass: 'bg-[var(--primary-bg)] text-[var(--primary-text)]',
        },
        { text: 'se torna', colorClass: 'bg-[var(--primary-text)] text-[var(--primary-bg)]' },
      ],
      [{ text: 'o usuário', colorClass: 'bg-[var(--primary-blue)] text-[var(--primary-text)]' }],
    ],
  },
]

const currentPhrase = ref(phraseStructs[0])
let idx = 0

function nextPhrase() {
  idx = (idx + 1) % phraseStructs.length
  currentPhrase.value = phraseStructs[idx]
}

// Troca automática a cada 2s para ficar mais rápida
setInterval(nextPhrase, 800)
</script>

<template>
  <div
    id="inicio"
    ref="asciiContainer"
    class="relative w-full overflow-hidden h-[627px] md:h-[860px] lg:h-[860px]"
  >
    <!-- ASCII background (p5.js) -->
    <div class="absolute inset-0 z-0"></div>

    <!-- Texto -->
    <div class="absolute inset-0 flex items-center justify-center px-4 z-10">
      <div class="flex flex-col items-center text-center space-y-[4px] w-full lg:max-w-[1060px]">
        <template v-for="(line, iLine) in currentPhrase.lines" :key="iLine">
          <p class="flex flex-wrap justify-center m-0 leading-[1.1]">
            <template v-for="(span, iSpan) in line" :key="iSpan">
              <span
                class="font-medium px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
                :class="span.colorClass"
              >
                {{ span.text }}
              </span>
            </template>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
asciiContainer,
.asciiContainer > div {
  margin: 0;
  padding: 0;
}
</style>
