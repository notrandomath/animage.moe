<template>
  <TopBar/>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');
:root {
  --textColor: #F8E5EE;
}
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #211103;
}
</style>
