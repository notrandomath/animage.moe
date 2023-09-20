<!-- I made a different home page component because for some reason css was not loading on initial render-->
<template>
  <ScrollingCards></ScrollingCards>
  <div className="mission">
      <h1>The Cal Animage Network (CAN) is one of the largest Japanese animation, or anime club communities, including thousands of members all over the world. Enroll with your club now to be among countless passionate anime aficionados across the globe.
</h1>
  </div>
  <div className="announcements">
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTz=1&showTabs=0&showPrint=1&showDate=1&showNav=0&mode=AGENDA&showCalendars=0&src=MzE0NDMxZTFhMzNlYmQ1MGM1MTVmODM5MmQxNjg4MDA4MDA5ZGE1MjMyNzMyZTY3ZjM5MzZlMjJlNGQzZTYyMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F4511E" style="border-width:0" width="800" height="400" frameborder="0" scrolling="no"></iframe>
  </div>
  
  <div class="map">
      <iframe src="https://www.google.com/maps/d/embed?mid=1nRp4RbVJwb9nQHRbhoUVLtzoy20qd44&ehbc=2E312F" width="640" height="480"></iframe>
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

}
.announcements{
  margin-top: 5%;
  margin-left: 10%;
  width: 80%;
  height: 100%;
}
</style>