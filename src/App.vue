<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/basic">Basic component</router-link> |
    <router-link to="/watcher">Watchers</router-link> |
    <router-link to="/directive">Directives</router-link> |
    <router-link to="/custom-directive">Custom Directive</router-link> |
    <router-link to="/composition">Composition API</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2rem;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
