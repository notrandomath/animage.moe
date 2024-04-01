<template>
    <div class="memberPage">
        <div class="frame">
            <h1>{{ member.name }}</h1>
            <div>
                <h5>Est. {{ member.join }}</h5>
                <h5>Location: {{ member.location }}</h5>
            </div>
            <div class="artworksFrame">
                <img class="logoImage" :src="'club_logos/' + member.logo" alt="pic">
                <img v-if="member.mascot" class="mascotImage" :src="'club_logos/' + member.mascot" alt="pic">
            </div>
            <div class="info">
                <p class="websiteText">Main page: <a :href="member.website">{{ member.website }}</a></p>
                <p v-if="member.mascot_name">Mascot: {{ member.mascot_name }}<credit v-if="member.mascot_credit"> by {{ member.mascot_credit }}</credit></p>
                <p v-if="member.misc_credit">{{ member.misc_credit }}</p>
                <p class="description">{{ member.description }}</p>
            </div>
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
    @media screen and (max-width: 700px) {
        margin-left: 5%;
        width: 90%
    }
}
.info {
    max-width: 95%;
    margin: 2%;
    border: 2px solid var(--logoColor);
    padding: 2%;
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
    @media screen and (max-width: 700px) {
        width: 98%
    }
}
.artworksFrame{
    margin-top: 40px;
    margin-bottom: 2%;
    height: 300px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        height: 100%;
    }
    justify-content: center;
    align-items: center;
}
img {
    flex: 1;
    height: 300px;
    max-width: 100%;
    min-width: 0;
    object-fit: contain;
    margin: 5px;
}
a {
    text-decoration: none;
    word-break: break-all;
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
h1 {
    border-radius: 5%;
    background-color: var(--logoColor);
    padding: 10px;
    color: white;
    @media screen and (max-width: 700px) {
        width: 80%;
    }
}
h2 {
    text-align: center;
    text-decoration: none;
}
h5 {
    margin: 0;
    font-size: 20px;
    @media screen and (max-width: 700px) {
        font-size: 16px;
        text-align: center;
    }
}
p {
    font-size: 20px;
    text-align: left;
    @media screen and (max-width: 700px) {
        font-size: 16px;
        text-align: center;
    }
}
.description {
    margin-top: 25px;
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