<template>
  <ScrollingCards></ScrollingCards>
  <Mission></Mission>
  <Calendar></Calendar>
  <h1>Galleries</h1>
  <div class="galleries">
    <Gallery :pictures="picture_data.art" folder="artwork" caption="Artwork"></Gallery>
    <Gallery :pictures="picture_data.events" folder="event_art" caption="Events"></Gallery>
  </div>
  <Map></Map>
</template>

<style scoped>
h1 {
  margin-top: 50px;
}
.galleries{
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 5%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

<script>
import PICTURE_DATA from '../gallery_data.json';
export default{
    data(){
        return{
            picture_data: PICTURE_DATA
        }
    }
}
</script>