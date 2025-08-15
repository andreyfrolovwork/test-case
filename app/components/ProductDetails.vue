<template>
  <div v-if="itemData" class="details">
    <h3>Product Details</h3>
    <div>
      <h4>{{ itemData.title }}</h4>
      <p>{{ itemData.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  itemData: Record<string, unknown> | null;
}>();
</script>

<style scoped>
.details {
  border: 1px dashed blue;
  padding: 1rem;
}
</style>

