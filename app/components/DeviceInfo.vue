<template>
  <div class="device-info">
    <h3>Device Info</h3>
    <p>Your User Agent is: {{ userAgent }}</p>
  </div>
</template>

<script setup lang="ts">
// This is an unsafe access to a client-side only object.
// It will throw an error during SSR because `window` is not defined on the server.
const userAgent = window.navigator.userAgent;
</script>

<style scoped>
.device-info {
  border: 1px solid red;
  padding: 1rem;
  margin-top: 1rem;
  background-color: #fff0f0;
}
</style>
