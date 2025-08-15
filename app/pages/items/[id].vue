<template>
  <div>
    <AnimationIndicator />
    <h1>Item Page</h1>
    <hr >
    <AvailabilityChecker />
    <hr >

    <button @click="showReviews = !showReviews">
      {{ showReviews ? 'Hide' : 'Show' }} Reviews
    </button>
    <ProductReviews v-if="showReviews" />
    
    <hr >

    <div v-if="error">
      <p>Could not load item data.</p>
    </div>

    <template v-else-if="data">
      <ProductDetails :item-data="data" />
      <ProductImageGallery :item-data="data" />
    </template>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Product } from '~/types/product';
import ProductReviews from '~/components/ProductReviews.vue';
import AnimationIndicator from '~/components/AnimationIndicator.vue';

const showReviews = ref(false);

const route = useRoute();
const id = computed(() => route.params.id as string);


const { data, error } = await useFetch<Product>(`/api/items/${id.value}`, {
  key: id.value,
});

</script>

<style>
body {
  font-family: sans-serif;
  padding: 2rem;
}
hr {
  margin: 2rem 0;
}
.device-info-error {
  border: 1px solid red;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #fff0f0;
}
</style>
