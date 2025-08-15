<template>
  <div>
    <h1>My Awesome Store</h1>
    <p>Welcome to our store! Check out the latest products:</p>

    <div v-if="pending">Fetching products...</div>
    <div v-else-if="error">Could not load products.</div>
    <ul v-else-if="products">
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/items/${product.id}`">{{ product.title }}</NuxtLink>
        - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import type { Product } from '~/types/product';

// Using the full lodash library here increases the bundle size.
// Using _.shuffle causes a hydration mismatch because the shuffled order
// on the server will be different from the shuffled order on the client.
const { data: products, pending, error } = await useAsyncData('products', async () => {
  const fetchedProducts = await $fetch<Product[]>('https://fakestoreapi.com/products?limit=10');
  return _.shuffle(fetchedProducts);
});
</script>

<style>
body {
  font-family: sans-serif;
  padding: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
}
</style>
