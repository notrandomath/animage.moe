<template>
  <ScrollingCards></ScrollingCards>
  <Mission></Mission>
  <!-- <Newsletter></Newsletter> (uncomment when newsletter embed is ready) -->
  <h1>Animage in Action!</h1>
  <div class="galleries">
    <Gallery source="https://docs.google.com/spreadsheets/d/e/2PACX-1vTJoiRGWTx0i6eEcFKQFNPTnAcC6ADlQy4YjY0aBq_S6ojFJgJnfkdyaDJTfNLNg6wd_kGpkUFiN9Vj/pubhtml?widget=true&amp;headers=false" caption="Official Member Sheet"></Gallery>
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
  flex-direction: column;
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