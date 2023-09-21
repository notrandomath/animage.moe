<template>
    <div class="members">
        <h1>Current Members</h1>
        <div class="label">
            <div class="ellipse"></div>
            <h2>= leading member</h2>
        </div>
        <div class="grid">
            <div class="content" v-for="(member, index) in member_data">
                <MemberCard class="card" :member="member" :index="index"></MemberCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
.members {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
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
    align-items: center;
    justify-content: center;
    width: 100%;
}

.grid { 
  width: 100%;
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  place-items: center;
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