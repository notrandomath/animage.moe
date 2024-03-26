<template>
    <div class="memberPage">
        
        <div class="artworksFrame">
            <div class="imgFrame">
                <img class="logoImage" :src="'club_logos/' + member.logo" alt="pic">
            </div>
            <div class="mascot" v-if="member.mascot">
                <div class="frame">
                    
                    <img class="mascotImage" :src="'club_logos/' + member.mascot" alt="pic">
                </div>
            </div>
        </div>
        <div class="frame">
            <h1>{{ member.name }}</h1>
            <h2>Location: {{ member.location }}</h2>
            
            <div class="text">
                <div class="info">
                    <p v-if="member.mascot_name">Mascot: {{ member.mascot_name }}</p>
                    <p class="websiteText">Website: <a :href="member.website">{{ member.website }}</a></p>
                </div>
                
                <p>Description: {{ member.description }}</p>
                
                
            </div>
            <a class="websiteFrame" :href="member.website"><button>
                Website
                <Icon class="exit" name="ic:round-exit-to-app"></Icon>
            </button></a>
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
.websiteFrame{
    @media screen and (min-width: 701px) {
        display: none;
    }
}
.artworksFrame{
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 5%;
    padding: 2%;
    background-color: var(--frameColor);
    width: 76%;
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
.imgFrame{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
.mascot{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
img {
    height: 300px;
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
h2 {
    text-align: center;
    text-decoration: none;
}
p {
    text-align: left;
    @media screen and (max-width: 700px) {
        text-align: center;
    }
}
.websiteText {
    margin-bottom: 50px;
    @media screen and (max-width: 700px) {
        display: none;
    }
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