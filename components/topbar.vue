<template>
    <div class="topbar" :class="{ active: showDropdown }">
      <div class="logo">
        <NuxtLink to="/"><img src="~/assets/logo.png" alt=""></NuxtLink>
      </div>
      <div class="normalMenu" v-if="!isMobile">
        <Dropdown class="aboutDrop" @toggle-dropdown="toggleDropdown"/>
        <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/members">Members</NuxtLink></h2>
        <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/contact">Contact</NuxtLink></h2>
        <div class="boxedText">
            <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/join">Join Us!</NuxtLink></h2>
        </div>
      </div>
      <div class="mobile" v-if="isMobile">
        <MobileMenu/>
      </div>
    </div>
    
</template>

<script>
export default{
  watch: {
    $route() {
      this.showDropdown = false;
    },
  },
  data() {
      const mediaQuery = window.matchMedia('(max-width: 1100px)');

      return {
          mediaQuery,
          isMobile: mediaQuery.matches,
          showDropdown: false, 
      };
  
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
  mounted() {
      window.addEventListener('resize', () => {
          this.isMobile = this.mediaQuery.matches;
      });
  }
}
</script>
  
<style scoped>
  .topbar{
    z-index: 3;
    top: 0;
    background: linear-gradient(180deg, var(--logoColor) 70.31%, rgba(217, 217, 217, 0.00) 100%);
    position: fixed;
    display: flex;
    height: var(--topbarHeight);
    width: 100%;
    color: var(--textColor);
    align-items: stretch;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
  }
  .topbar.active { 
    height: 350px;
  }
  .logo{
    height: 150px;
    margin-left: 2%;
  }
  .mobile{
    height: 100%;

  }
  .normalMenu{
    margin-top: 10px;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
  }

  img{
    background-color: white;
    margin-top: 5px;
    height: 65%;
    border-radius: 30px;
  }

  h2 {
    text-decoration: none;
    margin-right: 20px;
    font-size: 150%;
  }

  .boxedText{
    background: var(--textColor); 
    border: 1px solid black;
    margin-right: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25px;
    align-items: center;
    height: fit-content;
  }
  .boxedText h2{
    color: black;
    margin-right: 0px;
  }
</style>