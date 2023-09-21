<template>
    <div class="gallery">
        {{ caption }}
        <div class="image-carousel">
            <div class="imgContainer">
                <transition-group name="fade" tag="div" appear>
                    <img
                    v-for="(picture, index) in pictures"
                    :key="index"
                    :src="'/animage.moe/' + folder + '/' + picture" alt="picture"
                    :style="{ zIndex: index === currentIndex ? 1 : 0 }"
                    class="carousel-image"
                    v-show="index === currentIndex"
                    />
                </transition-group>
            </div>
            <div class="carousel-controls">
                <Icon name="ic:baseline-arrow-left" @click="prevImage" color="white" size="50px" class="carousel-arrow left">←</Icon>
                <Icon name="ic:baseline-arrow-right" @click="nextImage" color="white" class="carousel-arrow right" size="50px">←</Icon>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'gallery',
  props: ['pictures', 'folder', 'caption'],
  data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.pictures.length;
        },
        prevImage() {
            this.currentIndex = this.currentIndex === 0 ? this.pictures.length - 1 : this.currentIndex - 1;
        },
    },
}
</script>
  
<style scoped>
  .gallery{
    width: 49%;
    aspect-ratio: 14/10;
    @media screen and (max-width: 700px) {
        margin-bottom: 50px;
        width: 100%;
    }
  }
  
  .carousel-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    z-index: 2;
    position: relative;
  }

  .carousel-arrow {
    background: rgba(0, 0, 0, 0.5);
    border: none;
    width: 50px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .image-carousel {
    background-color: var(--frameColor);
    position: relative;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .imgContainer {
    margin: 5%;
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
  }

  .carousel-image {
    position: absolute;
    left: 0;
    width: 100%;
    min-height: 100%;
    opacity: 1;
  }
  
    .fade-enter-active, .fade-leave-active {
        transition: all 0.5s ease-out;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>
  