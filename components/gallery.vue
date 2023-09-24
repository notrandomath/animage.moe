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
    width: 49%;
    @media screen and (max-width: 700px) {
        margin-bottom: 50px;
        width: 100%;
    }
  }
  iframe{
    width: 100%;
    height: 400px;
  }
</style>
  