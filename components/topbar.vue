<template>
    <div class="topbar">
      <div class="emptyLeft"/>
      <div class="center">
        <NuxtLink to="/"><img src="~/assets/logo.png" alt=""></NuxtLink>
      </div>
      <div class="right">
        <Dropdown class="aboutDrop"/>
        <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/members">Members</NuxtLink></h2>
        <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/contact">Contact</NuxtLink></h2>
        <div class="boxedText">
            <h2><NuxtLink style="text-decoration: none; color: inherit;" to="/join">Join Us!</NuxtLink></h2>
        </div>
      </div>
    </div>
</template>
  
<style scoped>
  .topbar{
    background: linear-gradient(180deg, var(--logoColor) 70.31%, rgba(217, 217, 217, 0.00) 100%);

    display: flex;
    height: 220px;
    color: var(--textColor);
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
      justify-content: flex-start;
    }
  }
  .emptyLeft{
    width: 33%;
    @media screen and (max-width: 1100px) {
       display: none;
    }
  }
  .center{
    width: 34%;
    align-items: top;
    height: 100%;
    @media screen and (max-width: 1100px) {
      margin-left: 2%;
      margin-right: 1%;
    }
  }
  .right{
    margin-top: 10px;
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    @media screen and (max-width: 1100px) {
      flex: 1;
      flex-wrap: wrap;
    }
  }

  img{
    background-color: white;
    margin-top: 5px;
    height: 65%;
    border-radius: 30px;
    @media screen and (max-width: 1100px) {
      height: 160px;
      width: 100%;
    }
  }

  h2 {
    text-decoration: none;
    margin-right: 20px;
    font-size: 100%;
  }

  .everythingElse{
    
    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
    }
  }

  .boxedText{
    background: var(--textColor); 
    border: 1px solid black;
    margin-right: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 25px;
    align-items: center;
    height: fit-content;
  }
  .boxedText h2{
    color: black;
    margin-right: 0px;
  }
</style>