<template>
  <div className="mission">
      <p>The <b>Cal Animage</b> Network is the world’s largest association of anime clubs! Together, our purpose is to uphold the following 3 goals:</p>
      <li>1) To <b>bring together clubs</b> for open collaboration! 🤝</li>
      <li>2) To <b>cultivate growth</b> for all of our diverse clubs and communities! 🌲</li>
      <li>3) To <b>promote</b> a wider & more <b>inclusive appreciation</b> of Japanese culture, Japanese animation, and other interconnected mediums! 🗾</li>
  </div>
</template>

<style scoped>
.mission {
  
  margin-left: 10%;
  width: 80%;
  padding-top: 2%;
  padding-bottom: 2%;
  background-color: var(--frameColor);
  border-radius: 50px;
  @media screen and (max-width: 700px) {
    width: 76%;
    margin-left: 2%;
    padding: 10%;
  }
}
p{
  margin-left: 2%;
  margin-right: 2%;
  font-size: 30px;
  text-align: center;
}
li{
  margin-top: 5px;
  margin-left: 2%;
  text-align: left;
  font-size: 30px;
}

</style>