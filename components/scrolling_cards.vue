<template>
    <div class="grid">
        <div class="content" v-for="member in member_data">
            <MemberCard class="card" :member="member"></MemberCard>
        </div>
        <div class="duplicated_content" v-for="member in member_data">
            <MemberCard class="card" :member="member"></MemberCard>
        </div>
    </div>
</template>

<script>
import MEMBER_DATA from '../member_data.json';
export default{
    data(){
        return{
            member_data: MEMBER_DATA
        }
    }
}
</script>

<style scoped>
@keyframes scroll {
	0% { transform: translateX(calc(-300px * 5))}
    100% { transform: translateX(calc(0))}
}
.grid { 
  animation: scroll 20s linear infinite;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: auto auto;
  grid-gap: 20px;
  align-items: start;
  height: 600px;
}
h1 {
    margin-top: 50px;
}
</style>