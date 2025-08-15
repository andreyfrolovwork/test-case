<template>
  <div v-if="itemData" class="gallery">
    <h3>Image Gallery</h3>
    <div>
      <p><em>(Imagine a cool image gallery for item #{{ itemData.id }} here)</em></p>
      <p>Based on title: {{ itemData.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  itemData: Record<string, unknown> | null;
}>();
</script>

<style scoped>
.gallery {
  border: 1px dashed green;
  padding: 1rem;
  margin-top: 1rem;
}
</style>

