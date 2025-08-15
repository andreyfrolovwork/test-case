<template>
  <div>
    <p>Availability: {{ availabilityStatus }}</p>
  </div>
</template>

<script setup lang="ts">
const availabilityStatus = ref('Checking...');

if (import.meta.client) {

  const isFavorite = localStorage.getItem('favorite-item') === 'true';
  availabilityStatus.value = isFavorite ? 'In your favorites!' : 'Available';
}
</script>

<style scoped>
p {
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  margin: 1rem 0;
}
</style>

