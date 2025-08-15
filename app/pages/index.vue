<template>
  <div>
    <h1>My Awesome Blog</h1>
    <p>Welcome to our blog! Here are the latest posts:</p>

    <div v-if="pending">Fetching posts...</div>
    <div v-else-if="error">Could not load posts.</div>
    <ul v-else-if="posts">
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/items/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useAsyncData('posts', () => {
  return $fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
});
</script>

<style>
body {
  font-family: sans-serif;
  padding: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 0.5rem;
}
</style>
