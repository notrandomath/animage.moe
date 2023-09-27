<template>
  <div class="sidebar" :class="{ active: showSidebar }">
    <Dropdown class="aboutDropdown"/>
    <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/members">Members</NuxtLink></h2>
    <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/contact">Contact</NuxtLink></h2>
    <div class="boxedText">
      <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/join">Join Us!</NuxtLink></h2>
    </div>
  </div>
  <div class="hamburger" @click="showSidebar = !showSidebar" :class="{ active: showSidebar }">
    <span class="line1"></span>
    <span class="line2"></span>
    <span class="line3"></span>
  </div>
</template>

<script>
export default {
  name: "mobile_menu",
  watch: {
    $route() {
      this.showSidebar = false;
    },
  },
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>

<style scoped>
.sidebar {
  background: var(--logoColor);
  z-index: 2;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 100px;
  right: -100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: all 0.5s ease-in-out;
}
.aboutDropdown{
  width: 100%;
}
.sidebar.active{
  right: 0;
}
.sidebar h2{
  width: 100%;
  top: 0;
  position: relative;
  z-index: 4;

}
.hamburger {
  z-index: 2;
  margin-top: 20px;
  margin-right: 25px;
  margin-left: 25px;
  width: 45px;
  height: 60px;

  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;

  cursor: pointer;
  display: flex;
}
.hamburger.active .line1 {
    transform: rotate(45deg);
}
.hamburger.active .line2 {
    opacity: 0;
}
.hamburger.active .line3 {
    transform: rotate(-45deg);
}
.hamburger span {
  background-color: var(--textColor);
  width: 100%;
  height: 3px;
  transform-origin: left;

  transition: all 0.5s ease;
}
.boxedText{
    background: var(--textColor); 
    border: 1px solid black;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25px;
    color: black;
    height: fit-content;
    align-self: center;
    justify-self: center;
  }
</style>
