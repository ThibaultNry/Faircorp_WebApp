<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/windows">Windows</router-link> |
      <router-link to="/rooms">Rooms</router-link> |
      <router-link to="/about">About me</router-link>
    </div>
    <router-view />
    <footer>
      <p>Copyright © 2021 Thibault Narayana. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4a2e8e;
}
</style>
