<template>
  <div class="welcome">
    <h1>Welcome to the Faircorp Web App</h1>
    <p>
      This project is the web front-end part of the faircorp project available
      on the following
      <a href="https://github.com/ThibaultNry/Faircorp_Spring">repository</a> of
      <a href="https://github.com/ThibaultNry"> my GitHub account</a>.
    </p>
    <p>
      This Web Application was designed to be scalable, maintainable, and
      upgradable. It leverages:
    </p>
    <ul>
      <li class="li1"><img src="" />🖥️ Vue.js framework, using Vue CLI</li>
      <li class="li1">🚀 A Clevercloud powered API</li>
      <li class="li1">✔️ HTML, CSS and JS languages</li>
    </ul>

    <h2>Getting started</h2>
    <p>
      At the top of the page you will notice a navigation bar including 2 main
      elements:
    </p>
    <ul>
      <li class="li2">
        WINDOWS: API page listing all existing windows. You can open, close or
        delete a window.
      </li>
      <li class="li2">
        ROOMS: API page listing all existing rooms. You can read the current
        Temperature, and the building information.
      </li>
    </ul>
    <p>
      If you want to know more about me or get in touch, feel free to check the
      about me part.
    </p>
    <h2>About</h2>
    <p>
      The Faircorp Web App was created during my Master of Engineering degree at
      Ecole des Mines de Saint-Etienne. <br />This specific front-end project
      was carried out under the supervision of Professor Nassim Djahnit, with
      the help of Professor Yousouf Taghzouti.<br />
      Part of the code was borrowed to Professor Quentin Richaud whose GitLab
      for the lecture is available
      <a href="https://gitlab.com/emse1/cours_js_1/-/tree/master">here</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "WelcomePageContent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
