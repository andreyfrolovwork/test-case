<template>
  <div class="product-reviews">
    <h3>Customer Reviews</h3>
    <p>Loading review data...</p>
    <ul>
      <li><strong>Alice:</strong> Great product! - 5/5</li>
      <li><strong>Bob:</strong> Not bad, but could be better. - 3/5</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { initializeMetrics } from '~/utils/metrics';

initializeMetrics();

console.log('ProductReviews component script executed');
</script>

<style scoped>
.product-reviews {
  border: 2px solid purple;
  padding: 1.5rem;
  margin-top: 1rem;
  background-color: #f9f5ff;
}
</style>
