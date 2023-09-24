<script>

export default {
    name: 'member_card',
    props: ['member', 'index'],
}
</script>

<template>
    <NuxtLink :to="{ path: 'member_info', query: {index: index}}" :member="member">
        <div class="card">
            <!--leading member border: <div class="border" v-if="member.council"></div>-->
            <div class="imgContainer">
                <img :src="'club_logos/' + member.logo" alt="pic">
            </div>
        </div>
    </NuxtLink>
    <h2>{{ member.name }}</h2>
</template>

<style scoped>
    .memberBox{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .card{
        text-align: center;
        width: 300px;
        height: 200px;
        border-radius: 50px;
        background-color: var(--frameColor);
        
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    }
    .border{
        position: absolute;
        z-index: -1;
        background-color: magenta;
        width: 315px;
        height: 215px;
        border-radius: 50px;
    }
    .imgContainer{
        position: absolute;
        text-align: center;
        width: 300px;
        height: 200px;
        border-radius: 50px;
        overflow: hidden;
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        height: auto;
        z-index: 1;
    }

    h2{
        font-size: 12px;
        color: black;
        text-decoration: none;
        width: 100%;
    }
    .card:hover img{
        z-index: 0;
        opacity: 0.5;
    }

    .card:hover h2{
        color: white;
    }
</style>