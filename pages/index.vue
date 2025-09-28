<template>
  <ScrollingCards></ScrollingCards>
  <Mission></Mission>
  <!-- <Newsletter></Newsletter> (uncomment when newsletter embed is ready) -->
  <div class="member_sheet_container">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTJoiRGWTx0i6eEcFKQFNPTnAcC6ADlQy4YjY0aBq_S6ojFJgJnfkdyaDJTfNLNg6wd_kGpkUFiN9Vj/pubhtml?widget=true&amp;headers=false"></iframe>
  </div>
  <Map></Map>
</template>

<style scoped>
h1 {
  margin-top: 50px;
}
.member_sheet_container{
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 5%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 590px;
  bottom: 10px
}

iframe{
  width: 99%;
  aspect-ratio: 2;
  position: absolute;
  top: -30px;
  height: 600px;
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