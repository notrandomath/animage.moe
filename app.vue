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
  title: 'Cal Animage Network',
  ogTitle: 'Cal Animage Network',
  description: "Official website of the Cal Animage system, the world's largest association of anime clubs standing since 1989!",
  ogDescription: "Official website of the Cal Animage system, the world's largest association of anime clubs standing since 1989!",
  ogImage: 'https://animage.moe/logo.png',
  twitterCard: 'summary_large_image',
})
</script>
