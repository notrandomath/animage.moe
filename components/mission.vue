<template>
  <div className="mission">
      <p>The <b>Cal Animage</b> Network is the world’s largest association of anime clubs!<br/>Together, our purpose is to uphold the following 3 goals:</p>
      <ol>
        <li>To <b>bring together clubs</b> for open collaboration! 🤝</li>
        <li>To <b>cultivate growth</b> for all of our diverse clubs and communities! 🌲</li>
        <li>To <b>promote</b> a wider & more <b>inclusive appreciation</b> of Japanese culture, Japanese animation, and other interconnected mediums! 🗾</li>
      </ol>
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
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  text-align: center;
}
ol {
  list-style-type: none; /* Remove default numbering style */
  counter-reset: my-counter; /* Reset the counter for custom numbering */
}

li {
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
  font-size: 30px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
  counter-increment: my-counter; /* Increment the counter for each list item */
}

/* Style for the pseudo-element ::before to create custom numbering */
li::before {
  margin-left: -55px; /* a negative margin will remove the bullet from interrupting the flow of the text */
  content: "\2022\20"counter(my-counter) ") "; /* Use parentheses for numbering */
}

</style>