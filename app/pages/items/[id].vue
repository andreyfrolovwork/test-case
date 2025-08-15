<template>
  <div>
    <h1>Item Page</h1>
    <p>This is the page for item with ID: {{ id }}</p>
    
    <p><em>Navigate to /items/1, /items/2 etc. to see this page.</em></p>

    <hr >

    <AvailabilityChecker />
    
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
const route = useRoute();
const id = computed(() => route.params.id as string);


const { data, error } = await useFetch<Record<string, unknown>>(`/api/items/${id.value}`, {
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
</style>
