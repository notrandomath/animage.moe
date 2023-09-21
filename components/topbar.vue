<template>
    <div class="topbar">
      <div class="emptyLeft"/>
      <div class="center">
        <NuxtLink to="/"><img src="../../images/logo.png" alt=""></NuxtLink>
      </div>
      <div class="right">
        <Dropdown/>
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
    height: 30vh;
    color: var(--textColor);
    align-items: center;
    justify-content: space-between;
  }
  .emptyLeft{
    width: 33%;
  }
  .center{
    width: 34%;
    align-items: top;
    height: 100%;
  }
  .right{
    margin-top: 10px;
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
  }

  img{
    background-color: white;
    margin-top: 5px;
    height: 65%;
    border-radius: 30px;
  }

  h2 {
    text-decoration: none;
    margin-right: 20px;
    font-size: 100%;
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