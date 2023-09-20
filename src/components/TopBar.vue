<template>
  <div class="topbar">
    <div class="emptyLeft"/>
    <div class="center">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="right">
      <h2>About</h2>
      <h2>Members</h2>
      <h2>Contact</h2>
      <div class="boxedText">
        <h2>Join Us!</h2>
      </div>
    </div>
    
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topbar{
    background: linear-gradient(180deg, #640000 70.31%, rgba(217, 217, 217, 0.00) 100%);

    display: flex;
    height: 10vw;
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
    margin-top: 5px;
    height: 65%;
    border-radius: 50%;
  }

  h2 {
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
