<script>
export default {
  name: 'dropdown',
  watch: {
    $route() {
      this.showDropdown = false;
    },
  },
  data () {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
      this.$emit('toggle-dropdown'); // Emit an event to notify the parent
    },
  },
}
</script>

<template>
    <div class="dropdown">
        <div class="label" @click="toggleDropdown">
            <h2>About</h2>
            <Icon class="downArrow" name="ic:baseline-arrow-right" color="white" size="20px" v-if="!showDropdown"/>
            <Icon class="downArrow" name="ic:baseline-arrow-drop-down" color="white" size="20px" v-if="showDropdown"/>
        </div>
        <transition name="fade" appear>
            <div class="sub-menu" v-if="showDropdown">
                <h2 key="1"><NuxtLink style="text-decoration: none; color: inherit;" to="/history">History</NuxtLink></h2>
                <h2 key="2"><NuxtLink style="text-decoration: none; color: inherit;" to="/faq">FAQ</NuxtLink></h2>
                <h2 key="3"><NuxtLink style="text-decoration: none; color: inherit;" to="/docs">Official Documents</NuxtLink></h2>
            </div>
        </transition>
    </div>
</template>

<style scoped>
    .dropdown{
        width: fit-content;
        height: fit-content;        
    }
    .label{
        width: 100%;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .downArrow{
        border-right: 20px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 1s ease-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
