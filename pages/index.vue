<template>
  <ScrollingCards></ScrollingCards>
  <Mission></Mission>
  <!-- <Newsletter></Newsletter> (uncomment when newsletter embed is ready) -->
  <h1>Animage in Action!</h1>
  <div class="galleries">
    <Gallery source="https://docs.google.com/presentation/d/e/2PACX-1vSPhc1DVUtYD-RbHnJ1280i9BpMr0hJ3oZaVPaPCUoiAbks7y_BU0V0Tdx39qRyhtmG1Q3Ivp9mgIG6/embed?start=false&loop=true&delayms=3000" caption="Club Creations"></Gallery>
    <Gallery source="https://docs.google.com/presentation/d/e/2PACX-1vShdin9IGLZ_T4W6-P1y0nCcmGhxY4w7GGyjJSIkvcsoDfsESJrPEG9Z3YbM88kx7946ok_zrpQeGmC/embed?start=false&loop=true&delayms=10000" caption="Club Gatherings"></Gallery>
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
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
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