<template>
    <div class="newsletter">
        <div class="items">
            <!--
            <h2>CalAnime Newsletter</h2>
            -->
            <p>Sign up now for free informational publications regarding new events and releases within the anime industry.</p>
            <input>
            <button class="sign up">Email Me</button>
        </div> 
    </div> 
    <div class="footer">
        <div class="left">
            <img src="~/assets/logo.png" alt="">
            <div class="socials">
                <a href="https://discord.gg/P2ZP4PXF98"><Icon name="ic:baseline-discord" color="var(--logoColor)" size="30px"/></a>
                <a href="https://www.instagram.com/anime.uci/"><Icon name="mdi:instagram" color="var(--logoColor)" size="30px"/></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Icon name="mdi:whatsapp" color="var(--logoColor)" size="30px"/></a>
            </div>
        </div>
        <div class="right">
            <h2>Contact Us: animage@gmail.com</h2>
            <p>Site designed by Ellie H. and Yanni T.</p>
            <p>Site coded by Omar Y.</p>
            <p>Artists: cover by @example1, uci art by @example2, @example3</p>
        </div>
    </div>
</template>

<style scoped>
.newsletter{
    background-color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--textColor);
    display: flex;
    justify-content: center;
}
.items{
    text-align: left;
    @media screen and (max-width: 700px) {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
input{
    width: 71%;
    margin-right: 2%;
    height: 25px;
    background-color: var(--textColor);
    @media screen and (max-width: 700px) {
        margin-right: 0;
    }
}
button{
    width: 25%;
    height: 30px;
    border-radius: 30px;
    background-color: lightsalmon;
}
p{
    font-size: 10px;
    @media screen and (max-width: 700px) {
        width: 71%;
    }
}
img{
    height: 75px;
}
.footer{
    padding-left: 5%;
    padding-right: 5%;
    width: 90%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 700px) {
        width: 98%;
        padding-left: 1%;
        padding-right: 1%;
    }
}
.left{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex: 1;
}
.socials{
    padding-left: 10px;
}
.right{
    align-self: right; 
    justify-self: right;
}
.right p{
    @media screen and (max-width: 700px) {
        width: 100%;
    }
}
h2{
    @media screen and (max-width: 700px) {
        font-size: 15px;
    }
}
</style>
