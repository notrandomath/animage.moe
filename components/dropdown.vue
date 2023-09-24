<script>
export default {
  name: 'dropdown',
  data () {
    return {
      showDropdown: false
    }
  }
}
</script>

<template>
    <div class="dropdown">
        <div class="label" @click="showDropdown = !showDropdown">
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
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    h2{
        font-size: 150%;
        @media screen and (max-width: 700px) {
            font-size: 50%
        }
    }
    .downArrow{
        border-right: 20px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
