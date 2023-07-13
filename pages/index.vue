<template>
  <div v-if="data" class="mt-8 flex w-full max-w-2xl flex-col space-y-8">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Products</h1>
    <div class="h-[1px] w-full shrink-0 bg-gray-200" />
    <NuxtLink v-for="product in data.data" :href="'/product/' + product.id" class="flex flex-col space-y-4">
      <img :alt="product.attributes.name" class="w-full rounded border" :src="product.attributes.large_thumb_url" />
      <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
        {{ product.attributes.name }}
      </h4>
    </NuxtLink>
  </div>
</template>

<script setup>
const { data } = await useFetch(`/api/product/all`)
</script>
