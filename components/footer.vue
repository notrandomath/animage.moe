<template>
    <div class="separator"></div>
    <div class="footer">
        <div class="left">
            <h2>Stay in the loop?</h2>
            <div class="socials">
                <NuxtLink style="text-decoration: none; color: inherit;" to="/discord"><Icon name="ic:baseline-discord" color="var(--logoColor)" size="30px"/></NuxtLink>
                <NuxtLink style="text-decoration: none; color: inherit;" to="/instagram"><Icon name="mdi:instagram" color="var(--logoColor)" size="30px"/></NuxtLink>
                <NuxtLink style="text-decoration: none; color: inherit;" to="/email"><Icon name="mdi:email" color="var(--logoColor)" size="30px"/></NuxtLink>
            </div>
        </div>
        <div class="center">
            <h2>Contact Us: AnimageNetwork@gmail.com</h2>
            <h3>Artists: cover by @example1, uci art by @example2, @example3</h3>
        </div>
        <div class="right">
            <h3>Site designed by Ellie H. and Yanni T.</h3>
            <h3>Site coded by Omar Y.</h3>
        </div>
    </div>
</template>

<style scoped>
.separator{
    background-color: black;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 30px;
    color: var(--textColor);
    display: flex;
    justify-content: center;
}

button{
    margin-top: 10px;
    height: 30px;
    background-color: var(--textColor);
}
h3{
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
.center h3{
    text-align: center;
}
.right h3{
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
