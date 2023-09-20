<template>
    <a :href="member.website"> 
        <div class="card">
            <img :src="'/club_logos/' + member.logo" alt="pic">
            <h2>{{ member.name }}</h2>
        </div>
    </a>
</template>

<style scoped>
    .card{
        position: relative;
        text-align: center;
        width: 300px;
        height: 200px;
        border-radius: 50px;
        background-color: var(--frameColor);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    }
    img{
        width: 300px;
        height: auto;
        z-index: 1;
    }
    h2{
        color: white;
        text-decoration: none;
        position: absolute;
        width: 50%;
        top: 50;
        bottom: 50;
    }
    .card:hover{
        background-color: var(--logoColor);  
    }
    .card:hover img{
        z-index: 0;
        opacity: 0.2;
    }

</style>

<script>
export default {
  name: 'member_card',
  props: ['member'],
}
</script>