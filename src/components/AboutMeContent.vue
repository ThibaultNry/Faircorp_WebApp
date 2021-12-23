<template>
  <div class="about">
    <h1>About Me</h1>
    <img class="circle" src="../assets/profile.png" alt="Profile picture" />
    <p>
      Passionate about technology and digital transformation, I am a double
      degree student in engineering and business in two French grandes
      écoles.<br />
      This dual competence in engineering and management allows me to evolve in
      data science and machine learning with pragmatism. <br />I'm convinced
      that technology must respond in a simple way to the concrete problems of
      companies. <br />Hence I implement it and support the managerial changes
      generated. I am currently working in parallel with my studies at Sia
      Partners <br />
      as a machine learning engineer.<br /><br />
      If you want to get in touch feel free to send me a message on
      <a href="https://www.linkedin.com/in/narayanathibault/">LinkedIn</a> 👋
      <br />
      My Malt profile is also available
      <a href="https://www.malt.fr/profile/thibaultnarayana">here</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutMeContent",
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.li1 {
  display: inline-block;
  margin: 0 10px;
}
.li2 {
  display: list-item;
  margin: 0 10px;
}
a {
  color: #4a2e8e;
}
.circle {
  border-radius: 100%;
  max-width: 15%;
  max-height: 15%;
  margin-bottom: 25px;
}
</style>
