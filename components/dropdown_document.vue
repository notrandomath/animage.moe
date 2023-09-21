<template>
    <div class="documentFrame" @click="showDropdown = !showDropdown">
        <div class="labelAndIcon">
            <div class="label">
                <h1>{{ title }}</h1>
                <h2>{{ description }}</h2>
            </div>
            <div class="icon">
                <Icon class="downArrow" name="ic:baseline-arrow-right" color="black" size="30%" v-if="!showDropdown"/>
                <Icon class="downArrow" name="ic:baseline-arrow-drop-down" color="black" size="30%" v-if="showDropdown"/>
            </div>
        </div>
        
        
        <div class="document" v-if="showDropdown">
            <iframe :src=embed></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['title', 'description', 'embed'],
  data () {
    return {
      showDropdown: false
    }
  }
}
</script>

<style scoped>
.documentFrame{
    cursor: pointer;
    margin-left: 10%;
    margin-top: 2%;
    margin-bottom: 1%;
    width: 80%;
    background-color: var(--frameColor);
}
.labelAndIcon{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.label{
    display: flex;
    flex-direction: column;
    flex: 1;
}
.document{
    margin-left: 10%;
    width: 80%;
    height: 500px;
}
iframe{
    width: 100%;
    height: 100%;
}
</style>