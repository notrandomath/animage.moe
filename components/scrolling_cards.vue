<template>
    <div class="wrapper">
        <div class="grid">
            <div class="content" v-for="(member, index) in member_data">
                <MemberCard class="card" :member="member" :index="index"></MemberCard>
            </div>
            <div class="duplicated_content" v-for="(member, index) in member_data">
                <MemberCard class="card" :member="member" :index="index"></MemberCard>
            </div>
            <!-- comment below when it's even --> 
            <div class="duplicated_content" v-for="(member, index) in member_data">
                <MemberCard class="card" :member="member" :index="index"></MemberCard>
            </div>
            <div class="duplicated_content" v-for="(member, index) in member_data">
                <MemberCard class="card" :member="member" :index="index"></MemberCard>
            </div>
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
	0% { transform: translateX(calc(-322px * 11))} /* update the number on the right (6) to be the number of pairs of clubs */
    100% { transform: translateX(calc(0))}
}
.wrapper{
    padding-top: 2%;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

.grid {
  animation: scroll 40s linear infinite; /* if it's odd double the time, even half the time*/
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