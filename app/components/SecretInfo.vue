<template>
  <div class="secret-info">
    <h3>Security Info</h3>
    <p>The API secret key is: <strong>{{ apiSecret }}</strong></p>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const apiSecret = config.public.apiSecret;
</script>

<style scoped>
.secret-info {
  border: 1px solid orange;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #fff5e6;
}
strong {
  color: red;
}
</style>
