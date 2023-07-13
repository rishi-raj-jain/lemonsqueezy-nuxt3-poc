<template>
  <div v-if="data" class="mt-8 flex w-full max-w-2xl flex-col space-y-8">
    <NuxtLink class="text-sm font-light text-gray-400 hover:underline" to="/"> &larr; Back To Products </NuxtLink>
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {{ data.data.attributes.name }}
    </h1>
    <div class="h-[1px] w-full shrink-0 bg-gray-200" />
    <NuxtLink class="lemonsqueezy-button" :href="data.data.attributes.buy_now_url">
      <button
        class="mb-2 mr-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Buy
      </button>
    </NuxtLink>
    <img :alt="data.data.attributes.name" class="w-full rounded border" :src="data.data.attributes.large_thumb_url" />
    <div v-html="data.data.attributes.description" />
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.name

const { data } = await useFetch(`/api/product/${slug}`)
</script>
