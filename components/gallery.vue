<template>
    <div class="gallery">
        {{ caption }}
        <div class="slides">
          <iframe :src="source"></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gallery',
  props: ['caption', 'source'],
}
</script>
  
<style scoped>
  .gallery{
    margin-bottom: 50px;
    width: 100%;
  }
  iframe{
    width: 100%;
    aspect-ratio: 2;
  }
</style>
  