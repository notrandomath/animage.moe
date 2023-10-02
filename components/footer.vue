<template>
    <div class="newsletter">
        <div class="items">
            <!--
            <h2>CalAnime Newsletter</h2>
            -->
            <p>Sign up now for free informational publications regarding new events and releases within the anime industry.</p>
            <input :placeholder="'Email'">
            <button class="sign up">Email Me</button>
        </div> 
    </div> 
    <div class="footer">
        <div class="left">
            <h2>Stay in the loop?</h2>
            <div class="socials">
                <a href="https://discord.gg/P2ZP4PXF98"><Icon name="ic:baseline-discord" color="var(--logoColor)" size="30px"/></a>
                <a href="https://www.instagram.com/anime.uci/"><Icon name="mdi:instagram" color="var(--logoColor)" size="30px"/></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Icon name="mdi:whatsapp" color="var(--logoColor)" size="30px"/></a>
            </div>
        </div>
        <div class="center">
            <h2>Contact Us: AnimageNetwork@gmail.com</h2>
            <p>Artists: cover by @example1, uci art by @example2, @example3</p>
        </div>
        <div class="right">
            <p>Site designed by Ellie H. and Yanni T.</p>
            <p>Site coded by Omar Y.</p>
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
    margin-top: 10px;
    width: 25%;
    height: 30px;
    border-radius: 30px;
    background-color: lightsalmon;
}
p{
    text-align: center;
    font-size: 10px;
    width: 100%;
}
.footer{
    width: 98%;
    padding-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
}
.center{
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    width: 33%;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
}
.right{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 32%;
    @media screen and (max-width: 700px) {
        text-align: center;
        width: 100%;
    }
}
.socials{
    width: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    @media screen and (max-width: 700px) {
        align-self: center;
        justify-self: center;
    }
}
.left{
    display: flex;
    flex-direction: column;
    align-self: flex-start; 
    justify-self: flex-start;
    width: 33%;
    @media screen and (max-width: 700px) {
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}
.center p{
    text-align: center;
}
.right p{
    text-align: right;
    @media screen and (max-width: 700px) {
        width: 100%;
        text-align: center;
    }
}
h2{
    width: fit-content;
    text-align: left;
    font-size: 15px;
    @media screen and (max-width: 700px) {
        text-align: center;
        width: 100%;
    }
}
.center h2{
    width: 100%;
    text-align: center;
}
</style>
