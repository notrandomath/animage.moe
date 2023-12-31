<template>
  <Topbar />
  <NuxtLayout />
  <div class="other">
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
:root {
  --textColor: #F8E5EE;
  --logoColor: #790000;
  --frameColor: #f1d9d9;
  --topbarHeight: 110px /* used to be 150 */;
}

.other{
  position: relative;
  height: 100vh;
  top: var(--topbarHeight)
}

body {
  margin-top: 0px; 
  margin-bottom: 0px; 
  margin-left: 0px; 
  margin-right: 0px;
  padding: 0;

  font-family: 'Rubik', sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: 'Animage.moe',
  ogTitle: 'Animage.moe',
  description: 'The official CalAnimage Network site',
  ogDescription: 'The official CalAnimage Network site',
  ogImage: 'https://animage.moe/logo.png',
  twitterCard: 'summary_large_image',
})
</script>
