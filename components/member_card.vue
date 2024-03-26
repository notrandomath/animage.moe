<script>

export default {
    name: 'member_card',
    props: ['member', 'index'],
}
</script>

<template>
    <NuxtLink :to="{ path: 'member_info', query: {index: index}}" :member="member">
        <div class="card">
            <div class="imgContainer">
                <img :src="'club_logos/' + member.banner" alt="pic" :class="{ active: member.wide }">
            </div>
            <h2 class="name">{{ member.name }}</h2>
        </div>
    </NuxtLink>
    <h2>{{ member.location }}</h2>
</template>

<style scoped>
    .memberBox{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .card{
        position: relative;
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
        width: auto;
        height: 100%;
        z-index: 1;
    }
    img.active {
        width: 100%;
        height: auto;
    }
    .name{
        font-size: inherit;
        z-index: -1;
        color: black;
        text-decoration: none;
        position: absolute;
        width: 50%;
        height: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 50;
        bottom: 50;
    }

    h2{
        font-size: 12px;
        color: black;
        text-decoration: none;
        width: 100%;
    }
    .card:hover {
        background-color: var(--logoColor);
    }
    .card:hover .name{
        z-index: 1;
    }
    .card:hover img{
        z-index: 0;
        opacity: 0.5;
    }

    .card:hover h2{
        color: white;
    }
</style>