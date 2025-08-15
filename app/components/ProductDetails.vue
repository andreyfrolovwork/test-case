<template>
  <div v-if="itemData" class="details">
    <h3>Product Details</h3>
    <div>
      <h4>{{ itemData.title }}</h4>
      <p><strong>Price:</strong> ${{ itemData.price }}</p>
      <p><strong>Category:</strong> {{ itemData.category }}</p>
      <p>{{ itemData.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{
  itemData: Product | null;
}>();
</script>

<style scoped>
.details {
  border: 1px dashed blue;
  padding: 1rem;
}
</style>

