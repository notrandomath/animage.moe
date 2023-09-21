<template>
    <h1>{{ member.name }}</h1>
    <div class="profile">
        <img :src="'/animage.moe/' + 'club_logos/' + member.logo" alt="pic">
        <a :href="member.website"><button>
            Website
            <Icon class="exit" name="ic:round-exit-to-app"></Icon>
        </button></a>
        <h2>Greek Name: {{ member.greek_name }}</h2>
        <h2>Location: {{ member.location }}</h2>
        <p>Description: {{ member.description }}</p>
    </div>
</template>

<style scoped>
.profile{
    border-radius: 50px;
    padding: 2%;
    background-color: var(--frameColor);
    width: 86%;
    margin-left: 5%;
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
    background-color: var(--logoColor);
    color: var(--textColor);
    
    border-radius: 50px;
    font-size: 5vw;
    display: flex;
    padding: 50px;
    height: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
}
.icon{
    height: 100%;
    text-decoration: none;

}
h2 {
    width: 100%;
    text-align: left;
    text-decoration: none;
}
p {
    text-align: left;
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