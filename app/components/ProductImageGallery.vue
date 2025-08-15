<template>
  <div v-if="itemData" class="gallery">
    <h3>Image Gallery</h3>
    <div>
      <img :src="itemData.image" :alt="itemData.title" />
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
.gallery {
  border: 1px dashed green;
  padding: 1rem;
  margin-top: 1rem;
}
img {
  max-width: 200px;
  height: auto;
}
</style>

