<template>
  <div id="app">
    <router-link to="/"></router-link>
  <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f5f5f5;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
}

html, body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
