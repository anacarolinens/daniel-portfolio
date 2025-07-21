<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import p5 from 'p5'

const asciiContainer = ref(null)
let sketchInstance = null

onMounted(() => {
  const sketch = (p) => {
    let chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>?/|\\-=+~:;"\',.`'
    let w = 38
    let canvasWidth = window.innerWidth
    let canvasHeight = asciiContainer.value.clientHeight

    // Guardar propagação de ondas
    let waves = []

    const hexToRgb = (hex) => {
      const parsedHex = hex.replace('#', '')
      const bigint = parseInt(parsedHex, 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return { r, g, b }
    }

    p.setup = () => {
      p.createCanvas(canvasWidth, canvasHeight).parent(asciiContainer.value)
      p.textFont('monospace', w)
      p.textAlign(p.CENTER, p.CENTER)
      p.frameRate(30)
    }

    p.windowResized = () => {
      canvasWidth = window.innerWidth
      canvasHeight = asciiContainer.value.clientHeight
      p.resizeCanvas(canvasWidth, canvasHeight)
    }

    // Registrar posição do mouse para iniciar uma "onda"
    p.mouseMoved = () => {
      waves.push({
        x: p.mouseX,
        y: p.mouseY,
        radius: 0,
        maxRadius: 400,
      })
    }

    p.draw = () => {
      p.background(0)

      const baseColor = getComputedStyle(asciiContainer.value)
        .getPropertyValue('--ascii-art')
        .trim()
      const { r, g, b } = hexToRgb(baseColor)

      // Atualiza ondas
      waves.forEach((wave) => {
        wave.radius += 8 // velocidade da onda
      })

      // Remove ondas que passaram do máximo
      waves = waves.filter((wave) => wave.radius < wave.maxRadius)

      for (let y = 0; y < p.height; y += w) {
        for (let x = 0; x < p.width; x += w) {
          let n = p.noise(x * 0.008, y * 0.008, p.frameCount * 0.005)
          let brightness = n * 255
          let idx = p.floor(p.map(brightness, 0, 255, chars.length - 1, 0))

          let alpha = 50
          waves.forEach((wave) => {
            let d = p.dist(x, y, wave.x, wave.y)
            let diff = Math.abs(d - wave.radius)
            if (diff < 40) {
              alpha = p.map(diff, 0, 40, 255, 100)
            }
          })

          p.noStroke()
          p.fill(`rgba(${r}, ${g}, ${b}, ${alpha / 255})`)
          p.text(chars[idx], x + w / 2, y + w / 2)
        }
      }
    }
  }

  sketchInstance = new p5(sketch)
})

onBeforeUnmount(() => {
  if (sketchInstance) sketchInstance.remove()
})
</script>

<template>
  <div
    ref="asciiContainer"
    class="relative w-full overflow-hidden h-[627px] md:h-[860px] lg:h-[860px]"
  >
    <!-- Centraliza vertical e horizontalmente -->
    <div class="absolute inset-0 flex items-center justify-center px-4">
      <div class="flex flex-col items-center text-center space-y-[4px]">
        <!-- Linha 1 -->
        <p class="flex flex-wrap justify-center m-0 leading-[1.1]">
          <span
            class="font-medium bg-[var(--primary-gray)] text-[var(--primary-blue)] px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
          >
            Design
          </span>
          <span
            class="font-medium bg-[var(--primary-text)] text-[var(--primary-bg)] px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
          >
            é a
          </span>
          <span
            class="font-medium bg-[var(--primary-blue)] text-[var(--primary-bg)] px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
          >
            busca
          </span>
        </p>
        <!-- Linha 2 -->
        <p class="flex flex-wrap justify-center m-0 leading-[1.1]">
          <span
            class="font-medium bg-[var(--primary-bg)] text-[var(--primary-text)] px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
          >
            constante da forma, uma forma
          </span>
        </p>
        <!-- Linha 3 -->
        <p class="flex flex-wrap justify-center m-0 leading-[1.1]">
          <span
            class="font-medium bg-[#CECECE] text-[var(--primary-bg)] px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
          >
            de sensibilizar
          </span>
          <span
            class="font-medium bg-[var(--primary-bg)] text-[var(--primary-text)] px-2 py-1 text-[clamp(42.52px,8vw,70.62px)]"
          >
            a alma.
          </span>
        </p>
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
