<template>
    <div class="memberPage">
        <h1>{{ member.name }}</h1>
        <div class="frame">
            <img :src="'club_logos/' + member.logo" alt="pic">
        </div>
        <div class="mascot" v-if="member.mascot">
            <div class="frame">
                <h2>Mascot: {{ member.mascot_name }}</h2>
                <img class="mascot" :src="'club_logos/' + member.mascot" alt="pic">
            </div>
        </div>
        <div class="frame">
            <a :href="member.website"><button>
                Website
                <Icon class="exit" name="ic:round-exit-to-app"></Icon>
            </button></a>
        </div> 
        <div class="frame">
            <div class="home">
            <h2>Location: {{ member.location }}</h2>
            </div>
            <p>Description: {{ member.description }}</p>
        </div>
    </div>
    
</template>

<style scoped>
.memberPage{
    width: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.frame{
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 5%;
    padding: 2%;
    background-color: var(--frameColor);
    width: 76%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 100%;
}
a {
    text-decoration: none;
}
button {
    cursor: pointer;
    background-color: transparent;
    
    border-radius: 50px;
    font-size: 5vw;
    display: flex;
    padding: 50px;
    height: 50%;
    justify-content: center;
    align-items: center;
}
.icon{
    height: 100%;
    text-decoration: none;

}
.home {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
}
h2 {
    text-align: center;
    text-decoration: none;
}
p {
    text-align: center;
}
</style>

<script>
import MEMBER_DATA from '../member_data.json';
let index = 0;
export default{
    
    setup() {
        const route = useRoute();
        route.query.index ? index = route.query.index : index  = 0;
    },
    data(){
        return{
            member: MEMBER_DATA[index],
        }
    }
}
</script>