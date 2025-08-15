<template>
  <div>
    <p>Availability: {{ availabilityStatus }}</p>
  </div>
</template>

<script setup lang="ts">
const availabilityStatus = ref('Checking...');

// This will cause a hydration mismatch
// On the server, it will be 'Checking...'
// On the client, it will try to access localStorage and change to something else.
if (import.meta.client) {
  // This check is not enough to prevent hydration mismatch on its own
  // because the initial server-rendered value is different from what the client renders initially.
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

