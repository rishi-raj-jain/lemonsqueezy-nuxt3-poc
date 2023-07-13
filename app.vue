<template>
  <div class="flex w-full flex-col items-center px-5 md:px-0">
    <NuxtPage />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const squeezeLemons = () => {
  if (typeof document === 'undefined') return
  if (window.createLemonSqueezy) {
    window.createLemonSqueezy()
    document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
      i.classList.remove('pointer-events-none')
    })
    window.LemonSqueezy.Setup({
      eventHandler: (event) => {
        console.log(event)
      },
    })
  }
}

const prepareLemons = () => {
  if (typeof document === 'undefined') return
  document.querySelectorAll('.lemonsqueezy-button').forEach((i) => {
    i.classList.add('pointer-events-none')
  })
  const ifLemonsPrepared = document.querySelector('[src*="assets.lemonsqueezy.com/lemon.js"]')
  if (ifLemonsPrepared) {
    squeezeLemons()
  } else {
    var script = document.createElement('script')
    script.onload = () => {
      setTimeout(squeezeLemons, 100)
    }
    script.src = 'https://assets.lemonsqueezy.com/lemon.js'
    document.head.appendChild(script)
  }
}

onMounted(() => {
  let previousUrl = ''
  const observer = new MutationObserver(function (mutations) {
    if (location.href !== previousUrl) {
      previousUrl = location.href
      prepareLemons()
    }
  })
  const config = { subtree: true, childList: true }
  observer.observe(document, config)
})
</script>
