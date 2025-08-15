<template>
  <div class="indicator-container">
    <div class="color-bar"></div>
  </div>
</template>

<style scoped>
.indicator-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  z-index: 100;
}

.color-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #3498db, #9b59b6, #e74c3c, #3498db);
  background-size: 200% 100%;
  animation: color-flow 1s linear infinite;
}

@keyframes color-flow {
  0% { background-position: 200% 0; }
  100% { background-position: 0 0; }
}
</style>
