<template>
    <h1>Current Members</h1>
    <div class="label">
        <div class="ellipse"></div>
        <h2>= leading member</h2>
    </div>
    <div class="grid">
        <div class="content" v-for="member in member_data">
            <MemberCard class="card" :member="member"></MemberCard>
        </div>
    </div>
</template>

<style scoped>
.ellipse{ 
    width: 25px;
    height: 25px;
    background-color: magenta;
    border-radius: 50px;
    margin-right: 5px;
}
.label{
    display: flex;
    flex-direction: row;
}

.grid { 
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: start;
  justify-content: center;
  align-items: center;
}
h1 {
    margin-top: 50px;
}
</style>

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